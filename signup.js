const showEmailBtn = document.getElementById("showEmail");
const emailForm = document.getElementById("emailForm");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

showEmailBtn.addEventListener("click", () => {
    showEmailBtn.style.display = "none"; // hide only this button
    emailForm.classList.add("show");     // reveal form
});

togglePassword.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});

