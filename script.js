// ========================================
// LOGIN / SIGNUP BUTTONS
// ========================================

document.getElementById("butr").addEventListener("click", function () {
    window.location.href = "login/index.html";
});

document.getElementById("sutre").addEventListener("click", function () {
    window.location.href = "login/index.html";
});


// ========================================
// MORAFEQ FLOATING CONTACT BUTTON
// ========================================

const floatingBtn = document.getElementById("floatingBtn");
const floatingContact = document.querySelector(".floating-contact");

if (floatingBtn && floatingContact) {

    // Open / Close menu
    floatingBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        floatingContact.classList.toggle("active");
    });

    // Close when clicking anywhere outside
    document.addEventListener("click", function (event) {
        if (!floatingContact.contains(event.target)) {
            floatingContact.classList.remove("active");
        }
    });
}

// ========================================
// MOBILE MENU (added)
// ========================================

const mobileToggle = document.getElementById("mobileToggle");
const headerLinks = document.getElementById("headerLinks");

if (mobileToggle && headerLinks) {

    mobileToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        headerLinks.classList.toggle("show");
    });

    headerLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            headerLinks.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!headerLinks.contains(event.target) && !mobileToggle.contains(event.target)) {
            headerLinks.classList.remove("show");
        }
    });
}
