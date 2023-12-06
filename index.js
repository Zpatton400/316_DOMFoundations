document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration");
  form.addEventListener("submit", function(event) {
    const username = document.querySelector('input[name="username"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const passwordCheck = document.querySelector('input[name="passwordCheck"]');
    const errorDisplay = document.getElementById("errorDisplay");

    // Check if username is empty
    if (!username.value) {
      errorDisplay.textContent = "Username is required";
      username.focus();
      event.preventDefault();
      return;
    }

    // Check if email is valid
    if (!email.validity.valid) {
      errorDisplay.textContent = "Please enter a valid email";
      email.focus();
      event.preventDefault();
      return;
    }

    // Check if password is empty
    if (!password.value) {
      errorDisplay.textContent = "Password is required";
      password.focus();
      event.preventDefault();
      return;
    }

    // Check if passwords match
    if (password.value !== passwordCheck.value) {
      errorDisplay.textContent = "Passwords do not match";
      passwordCheck.focus();
      event.preventDefault();
      return;
    }

    // If everything is valid, clear the error message
    errorDisplay.textContent = "";
  });
});