const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        e.preventDefault(); 
        alert("Please enter both email and password.");
    }
});
