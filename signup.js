document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const password2 = form.password2.value.trim();

        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter!");
            return;
        }

        if (!/[0-9]/.test(password)) {
            alert("Password must contain at least one number!");
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            alert("Password must contain at least one special character (!@#$%^&*)!");
            return;
        }

        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }


        const user = { name, email, password };
        localStorage.setItem("account", JSON.stringify(user));
        localStorage.setItem("accountCreated", "true");

        alert("Account created successfully!");
        window.location.href = "index.html";
    });
});