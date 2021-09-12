'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const inputArr = [username, email, password, confirmPassword];

// Functions
const showError = function (input, message) {
  const formControl = input.parentElement;

  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const isValidEmail = function (email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const message = function (input) {
  let errorMessage = input.id.replace(/-p/, `P`);
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

const checkEmail = function (input) {
  if (isValidEmail(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Not a valid email');
  }
};

const checkRequired = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value === '') {
      showError(input, `It is less`);
    } else {
      showSuccess(username);
    }
  });
};

const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} must be at least ${min} charecters`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} must be more than ${max} charecters`);
  } else {
    showSuccess(input);
  }
};

const checkPasswordMatch = function (password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showSuccess(password);
    showSuccess(confirmPassword);
  } else {
    showError(confirmPassword, 'Confirm password is not matched');
  }
};
// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired(inputArr);
  checkEmail(email);
  checkLength(username, 7, 12);
  checkLength(password, 8, 12);
  checkPasswordMatch(password, confirmPassword);
});
