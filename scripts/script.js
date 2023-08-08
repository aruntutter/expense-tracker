"use strict";

// select HTML elements
const formEl = document.getElementById("form");
const transactionEl = document.getElementById("transaction");
const amountEl = document.getElementById("amount");

const balanceEl = document.getElementById("balance");
const moneyPlusEl = document.getElementById("money-plus");
const moneyMinusEl = document.getElementById("money-minus");
const listContainerElement = document.getElementById("list");

// global variables
let balance;
let income;
let expense;

let transactions = [];

// functions
const init = () => {
  listContainerElement.innerHTML = ``;
  transactionEl.value = null;
  amountEl.value = null;
  balance = 0;
  income = 0;
  expense = 0;

  balanceEl.innerHTML = `₹${balance.toFixed(2)}`;
  moneyPlusEl.innerHTML = `₹${income.toFixed(2)}`;
  moneyMinusEl.innerHTML = `₹${expense.toFixed(2)}`;
};

const addTransactionToDOM = (arr) => {
  // clean the container
  listContainerElement.innerHTML = ``;

  arr.forEach((item) => {
    const { id, transaction, amount } = item;

    // create an element

    const listEl = document.createElement("li");

    // add data

    const amountValue = amount > 0 ? `₹${amount}` : `₹-${amount}`;
    listEl.classList = amount > 0 ? "plus" : "minus";
    listEl.innerHTML = `
      ${transaction}<span>₹${amount}</span><button class="delete-btn" onClick = deleteTransaction(${id}) >x</button>`;
    // appendChild
    listContainerElement.appendChild(listEl);
  });
};

const deleteTransaction = (id) => {
  // filter method - filter all the elements expect the ID
  transactions = transactions.filter((item) => item.id != id);

  // calculate Totals
  calculateTotals();

  addTransactionToDOM(transactions);
};

const calculateTotals = () => {
  income = transactions
    .filter((item) => item.amount > 0)
    .reduce((prev, curr) => prev + curr.amount, 0);

  expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((prev, curr) => prev + curr.amount, 0);
  balance = transactions.reduce((prev, curr) => prev + curr.amount, 0);

  balanceEl.innerHTML = `₹${balance.toFixed(2)}`;
  moneyPlusEl.innerHTML = `₹${income.toFixed(2)}`;
  moneyMinusEl.innerHTML = `₹${expense.toFixed(2)}`;
};

//event listeners
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const transaction = transactionEl.value.trim();
  const amount = Number(amountEl.value.trim());

  if (transaction && amount) {
    const newTransaction = {
      id: `${Date.now()}`,
      transaction: transaction,
      amount: amount,
    };

    transactions.push(newTransaction);

    // calculate Totals
    calculateTotals();

    // add transaction to DOM
    addTransactionToDOM(transactions);
    // make input element empty
    transactionEl.value = null;
    amountEl.value = null;
  } else {
    alert("All values are mandatory");
  }
});

// initial settings
init();
