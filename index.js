document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.querySelector("a.btn");

 
    if (localStorage.getItem("accountCreated") === "true" && signupBtn) {
        signupBtn.style.display = "none"; 
    }
});