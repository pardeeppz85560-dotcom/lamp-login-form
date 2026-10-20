
const lampPanel = document.getElementById("lampPanel");
const lampSwitch = document.getElementById("lampSwitch");
const switchIcon = document.getElementById("switchIcon");
const switchText = document.getElementById("switchText");

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

const forgotLink = document.getElementById("forgotLink");
const googleButton = document.getElementById("googleButton");
const signupButton = document.getElementById("signupButton");

// Lamp ON / OFF
lampSwitch.addEventListener("click", () => {
  const isOff = lampPanel.classList.toggle("off");

  switchIcon.textContent = isOff ? "☾" : "☀";
  switchText.textContent = isOff ? "Turn lamp on" : "Turn lamp off";
});

// Show / hide password
togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

// Display messages
function showMessage(text, type = "error") {
  message.textContent = text;
  message.className = `message ${type}`;
}

// Demo login form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showMessage("Please enter your email and password.");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must contain at least 6 characters.");
    return;
  }

  showMessage(
    "Form validated successfully! Connect a backend to authenticate.",
    "success"
  );
});

// Forgot password demo
forgotLink.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showMessage("Enter your email first to request a reset.");
    emailInput.focus();
    return;
  }

  showMessage(
    "Password reset requires a connected backend or authentication service.",
    "success"
  );
});

// Google sign-in placeholder
googleButton.addEventListener("click", () => {
  showMessage(
    "Google sign-in is a demo button. OAuth setup is required."
  );
});

// Sign-up placeholder
signupButton.addEventListener("click", () => {
  showMessage(
    "Sign-up is not configured yet. Add a registration page and backend."
  );
});
