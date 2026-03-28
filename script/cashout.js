document.getElementById("cashout-btn").addEventListener("click", function () {
  // step-1 : get the values of agent number & validate
  const cashoutNumber = getValueFormInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }
  console.log(cashoutNumber);

  // step-2: get the amount
  const cashoutAmount = getValueFormInput("cashout-amount");
  console.log(cashoutAmount);

  // step-3 get the current balance
  const currentBalance = getBalance();

  // step-4: calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

   // step-5: get pin and validate
   const pin = getValueFormInput("cashout-pin");

    if (pin === "2005") {
        alert("Cashout Successful");
        console.log(newBalance);
        setBalance(newBalance);
    } else {
        alert("Invalid PIN");
        return;
    }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // step-1 : get the values of agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);

//   if (cashoutNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // step-2: get the amount and validate
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   // step-3 get the current balance
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   // step-4: calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   // get pin
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   console.log(cashoutPin);

//   if (cashoutPin === "2005") {
//       alert("Cashout Successful");
//       console.log(newBalance);
//       balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid PIN");
//     return;
//   }
// });
