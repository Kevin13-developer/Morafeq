// ========================================
// LOGIN / SIGNUP BUTTONS
// ========================================

document.getElementById("butr")?.addEventListener("click", function () {
    window.location.href = "../login/index.html";
});

document.getElementById("sutre")?.addEventListener("click", function () {
    window.location.href = "../login/index.html";
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
// MEDICINE SCHEDULE (list + storage)
// ========================================

const cards = document.getElementById("cards");

let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

function formatTime(time) {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
}

function renderMedicines() {
    cards.innerHTML = "";

    if (medicines.length === 0) {
        cards.innerHTML = `<div class="empty-state">No medicines added yet. Tap "Add Medicine" to get started.</div>`;
        return;
    }

    medicines.forEach((medicine, index) => {
        cards.innerHTML += `
          <div class="card">
            <button class="delete" onclick="deleteMedicine(${index})">✕</button>
            <h3>💊 ${medicine.name}</h3>
            <p>📅 ${medicine.date}</p>
            <p class="time">🕒 ${formatTime(medicine.time)}</p>
            <p>🔔 Reminder Active</p>
          </div>
        `;
    });
}

function deleteMedicine(index) {
    medicines.splice(index, 1);
    localStorage.setItem("medicines", JSON.stringify(medicines));
    renderMedicines();
}


// ========================================
// SAVE MEDICINE (called from the Save button's onclick="addMedicine()")
// ========================================

function addMedicine() {

    const name = document.getElementById("medicineName").value.trim();
    const date = document.getElementById("medicineDate").value;
    const time = document.getElementById("medicineTime").value;

    if (!name || !date || !time) {
        alert("Please fill all fields");
        return;
    }

    medicines.push({ name, date, time });
    localStorage.setItem("medicines", JSON.stringify(medicines));
    renderMedicines();

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineDate").value = "";
    document.getElementById("medicineTime").value = "";

    // Close the modal after saving
    document.getElementById("medicineContainer").style.display = "none";

    // Browser notification (optional, only if permission is granted)
    requestNotificationAndShow();

    // In-page confirmation banner
    showMedicineNotification();

    // Toast after a successful save
    showToast("Medicine added successfully");
}

function requestNotificationAndShow() {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") {
        new Notification("💊 Morafeq", { body: "Medicine saved successfully!" });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("💊 Morafeq", { body: "Medicine saved successfully!" });
            }
        });
    }
}

renderMedicines();


// ========================================
// IN-PAGE "SAVED" NOTIFICATION BANNER
// ========================================

let notificationTimer;

function showMedicineNotification() {
    const notification = document.getElementById("medicineNotification");
    if (!notification) return;

    clearTimeout(notificationTimer);
    notification.classList.add("show");

    notificationTimer = setTimeout(() => {
        closeNotification();
    }, 4000);
}

function closeNotification() {
    const notification = document.getElementById("medicineNotification");
    if (!notification) return;
    notification.classList.remove("show");
    clearTimeout(notificationTimer);
}


// ========================================
// TOAST (bottom-right stack)
// ========================================

function showToast(message) {
    const toastBox = document.getElementById("toastBox");
    if (!toastBox) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#25d366;margin:0 15px;font-size:20px;"></i><span>${message}</span>`;

    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}


// ========================================
// ADD MEDICINE MODAL
// ========================================

const nn = document.getElementById("nn");
const medicineContainer = document.getElementById("medicineContainer");

nn?.addEventListener("click", function (e) {
    e.preventDefault(); // stop <a href="#"> from jumping to top
    medicineContainer.style.display = "flex";
});

document.getElementById("closeMedicineContainer")?.addEventListener("click", function () {
    medicineContainer.style.display = "none";
});

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
