document.getElementById("add-money-btn").addEventListener("click", function () {
  // step-1: get the bank account
  const bankAccount = getValueFormInput("add-money-bank");
  if (bankAccount == "Select a bank") {
    alert("Please select a bank");
    return;
  }

  // step-2: get the account number
  const accountNumber = getValueFormInput("add-money-number");
  if (accountNumber.length !== 11) {
    alert("Invalid Account Number");
    return;
  }

  // step-3: get the amount
  const amount = getValueFormInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  // step-4: get the pin & check validity
  const pin = getValueFormInput("add-money-pin");
  if (pin == "2005") {
    alert(`Add Money Successful from ${bankAccount}`);

    // step-5: update the balance
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }
});
