// get value from input
function getValueFormInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

// get balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current balance:", Number(balance));
  return Number(balance);
}

// set balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
