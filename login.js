const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });
}

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default form submission

    const emailInput = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();

    if (!emailInput || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Derive username from email (everything before @)
    const username = emailInput.split('@')[0];

    // Save to localStorage so other pages (dashboard) can read it
    localStorage.setItem('username', username);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  });
}

