// ========================================
// SWITCH BETWEEN LOGIN AND REGISTER
// ========================================

const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", function () {
    container.classList.add("active");
});

loginBtn.addEventListener("click", function () {
    container.classList.remove("active");
});


// ========================================
// BACK ARROWS
// ========================================

document.getElementById("angelos").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.getElementById("angela").addEventListener("click", function () {
    window.location.href = "../index.html";
});


// ========================================
// LOGIN BUTTON
// ========================================

document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    const uname = document.getElementById("uname").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const con = document.getElementById("con");

    if (!uname || !pass) {
        con.innerHTML = "Please fill all fields";
        return;
    }

    con.innerHTML = "Welcome " + uname;
});
