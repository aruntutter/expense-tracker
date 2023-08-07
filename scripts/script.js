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

//event listeners

// initial settings
init();
