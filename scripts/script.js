"use strict";

// select HTML elements
const formEl = document.getElementById("form");
const transactionEl = document.getElementById("transaction");
const amountEl = document.getElementById("amount");

const balanceEl = document.getElementById("balance");
const moneyPlusEl = document.getElementById("money-plus");
const moneyMinusEl = document.getElementById("money-minus");
const listContainerElement = document.getElementById("list");

const btnSubmitEl = document.getElementById("btn-submit");

// global variables
let balance;
let income;
let expense;

let transactions = localStorage.getItem("transactions")
  ? JSON.parse(localStorage.getItem("transactions"))
  : [];

let isEditing;
let itemToEdit;

// functions
const init = () => {
  listContainerElement.innerHTML = ``;
  transactionEl.value = null;
  amountEl.value = null;
  balance = 0;
  income = 0;
  expense = 0;

  isEditing = false;
  itemToEdit = {};

  // calculate Totals
  calculateTotals();

  addTransactionToDOM(transactions);

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

    const amountValue = amount > 0 ? `₹${amount}` : `₹-${-amount}`;
    listEl.classList = amount > 0 ? "plus" : "minus";
    listEl.innerHTML = `
      ${transaction}<span>${amountValue}</span><button class="delete-btn" onClick = deleteTransaction(${id})><i class="fa-solid fa-trash"></i></button> <button class="edit-btn" onClick = editTransaction(${id})><i class="fa-solid fa-pen-to-square"></i></button>`;
    // appendChild
    listContainerElement.appendChild(listEl);
  });
};

const deleteTransaction = (id) => {
  // filter method - filter all the elements expect the ID
  transactions = transactions.filter((item) => item.id != id);

  // add transaction to local storage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // calculate Totals
  calculateTotals();

  addTransactionToDOM(transactions);
};

const editTransaction = (id) => {
  // change the boolean edit variable
  isEditing = true;
  // find the element to edit and store it in itemToEdit
  itemToEdit = transactions.find((item) => item.id == id);

  // add the selected item info to input elements
  transactionEl.value = itemToEdit.transaction;
  amountEl.value = itemToEdit.amount;

  // change the text of button element to edit transaction
  btnSubmitEl.innerText = `Submit Transaction`;
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
    if (isEditing) {
      // edit the element and store it in the transaction
      transactions = transactions.map((item) => {
        if (item.id == itemToEdit.id) {
          return { ...item, transaction: transaction, amount: amount };
        } else {
          return item;
        }
      });

      // update the helper variables
      isEditing = false;
      itemToEdit = {};

      // update the button text
      btnSubmitEl.innerText = `Add Transaction`;
    } else {
      const newTransaction = {
        id: `${Date.now()}`,
        transaction: transaction,
        amount: amount,
      };
      transactions.push(newTransaction);
    }

    // add transaction to local storage
    localStorage.setItem("transactions", JSON.stringify(transactions));

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
