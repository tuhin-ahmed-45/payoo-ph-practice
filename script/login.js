console.log("Login connected!");

document.getElementById("login-btn").addEventListener("click", function () {
  // Get the input values
  const numberInput = document.getElementById("number-input");
  const contactNumber = numberInput.value;
  console.log("Contact Number:", contactNumber);
  const pinInput = document.getElementById("pin-input");
  const pin = pinInput.value;
  console.log("4 Digit PIN:", pin);

  // Check input valid
  if (contactNumber == "01516598848" && pin == "2005") {
    alert("Login successful!");
    window.location.assign("/home.html")
  } else {
    alert("Login failed.");
    return;
  }
});
