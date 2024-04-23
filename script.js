let totalIncome = 0;
let totalExpenses = 0;

const incomeList = document.getElementById('incomeList');
const expenseList = document.getElementById('expenseList');
const totalIncomeDisplay = document.getElementById('totalIncome');
const totalExpensesDisplay = document.getElementById('totalExpenses');

function addTransaction() {
  const amount = document.getElementById('amount').value;
  const amountValue = parseFloat(amount);
  if (!amountValue) {
    alert('Please enter a valid number!');
    return;
  }

  if (amountValue > 0) {
    totalIncome += amountValue;
  } else {
    totalExpenses += Math.abs(amountValue);
  }
  totalIncomeDisplay.textContent = totalIncome.toFixed(2);
  totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
  document.getElementById('amount').value = '';
  document.getElementById('amount').focus();
}
function displayTransaction(list, amountValue) {
  const listItem = document.createElement('li');
  listItem.textContent = (amountValue > 0 ? '+' : '-') + Math.abs(amountValue).toFixed(2);
  list.appendChild(listItem);
}