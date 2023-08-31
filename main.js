const form = document.getElementById("form");
const names = document.getElementById("userName");
const email = document.getElementById("Email");
const number = document.getElementById("Number");
const address = document.getElementById("Address");

// more email validate
function isEmail(emailVal) {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  return true;
}

function validate() {
  const nameVal = names.value.trim();
  const emailVal = email.value.trim();
  const numberVal = number.value.trim();
  const addressVal = address.value.trim();

  // validate userName
  if (nameVal === "") {
    setErrorMsg(names, "name cannot be blank");
  } else if (nameVal.length <= 2) {
    setErrorMsg(names, "name min 3 char");
  } else {
    setSuccessMsg(names);
  }

  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "not a valid email");
  } else {
    setSuccessMsg(email);
  }

  // validate number
  if (numberVal === "") {
    setErrorMsg(number, "number cannot be blank");
  } else if (numberVal.length <= 10) {
    setErrorMsg(number, "not a valid number");
  } else {
    setSuccessMsg(number);
  }

  // validate address
  if (addressVal === "") {
    setErrorMsg(address, "address cannot be blank");
  } else if (addressVal.length <= 3) {
    setErrorMsg(address, "address min 4 char");
  } else {
    setSuccessMsg(address);
  }
}

function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errorMsg;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});
