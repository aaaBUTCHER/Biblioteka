// Get the elements
const subscribeBtn = document.getElementById("subscribe-btn");
const subscribeOptions = document.getElementById("subscribe-options");
const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");

// Hide the subscribe options initially
subscribeOptions.style.display = "none";

// Show the subscribe options when the user clicks the subscribe button
subscribeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  subscribeOptions.style.display = "block";
});

// Redirect to the sign up page when the user clicks the Sign Up button
signupBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "signup.html";
});

// Redirect to the sign in page when the user clicks the Sign In button
signinBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "signin.html";
});
