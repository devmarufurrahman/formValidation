const form = document.getElementById("inputForm");
const names = document.getElementById("userName");
const email = document.getElementById("Email");
const number = document.getElementById("Number");
const address = document.getElementById("Address");
const password = document.getElementById("password");
const passwordC = document.getElementById("passwordC");
const date = document.getElementById("date");
const gender = document.getElementById("gender");

// error message variable
let minChar = "min char ";
let notBlank = "cannot be blank!";
let isValid = "is invalid!";
let passNotMatch = "is not match!";

// more email validate
function isEmail(emailVal) {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 2) return false;
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)) {
    return true;
  }

  return false;
}

// validate function
function validate() {
  const nameVal = names.value.trim();
  const emailVal = email.value.trim();
  const numberVal = number.value.trim();
  const addressVal = address.value.trim();
  const passwordVal = password.value.trim();
  const passwordCVal = passwordC.value.trim();
  const dateVal = date.value;
  const genderVal = gender.value;
  console.log(genderVal);

  // validate userName
  if (nameVal === "") {
    setErrorMsg(names, notBlank);
  } else if (nameVal.length <= 2) {
    setErrorMsg(names, minChar + 3);
  } else {
    setSuccessMsg(names);
  }

  // validate email
  if (emailVal === "") {
    setErrorMsg(email, notBlank);
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, isValid);
  } else {
    setSuccessMsg(email);
  }

  // validate number
  if (numberVal === "") {
    setErrorMsg(number, notBlank);
  } else if (numberVal.length === 11) {
    setSuccessMsg(number);
  } else {
    setErrorMsg(number, isValid);
  }

  // validate address
  if (addressVal === "") {
    setErrorMsg(address, notBlank);
  } else if (addressVal.length <= 3) {
    setErrorMsg(address, minChar + 4);
  } else {
    setSuccessMsg(address);
  }

  // validate date
  if (dateVal === "") {
    setErrorMsg(date, notBlank);
  } else {
    setSuccessMsg(date);
  }

  // validate gender
  if (genderVal === "") {
    setErrorMsg(gender, notBlank);
  } else {
    setSuccessMsg(gender);
  }

  // validate password
  if (passwordVal === "") {
    setErrorMsg(password, notBlank);
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, minChar + 6);
  } else {
    setSuccessMsg(password);
  }

  // validate password confirm
  if (passwordCVal === "") {
    setErrorMsg(passwordC, notBlank);
  } else if (passwordVal !== passwordCVal) {
    setErrorMsg(passwordC, passNotMatch);
  } else {
    setSuccessMsg(passwordC);
  }
}

// Error Message fn
function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  const inputLabel = formControl.querySelector("label").innerText;

  formControl.className = "form-control error";
  small.innerText = `${inputLabel}  ${errorMsg}`;

  input.onblur = function (e) {
    formControl.className = "form-control ";
  };
}

// success message fn
function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// form submition listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();

  save();
});

// form save alert
function save() {
  let dataStr = $("#inputForm").serialize();

  alert(dataStr);
}
