'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

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

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value === '') {
    console.log('Username is required');
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    console.log('Email is required');
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    console.log('Password is required');
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (confirmPassword.value === '') {
    console.log('Confirm Password is required');
    showError(confirmPassword, 'Confirm password is required');
  } else if (password !== confirmPassword) {
    showError(confirmPassword, 'Confirm password is not matched');
  } else {
    showSuccess(confirmPassword);
  }
});
