/* ================= ACTIVE NAV LINK ================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* ================= FORM HANDLING ================= */

// Booking + Contact + Any Form
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("✅ Your request has been submitted successfully!");
        form.reset();
    });
});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ================= HOTEL CARD HOVER EFFECT ================= */

const hotelCards = document.querySelectorAll(".hotel-card");

hotelCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});


/* ================= BUTTON ANIMATION ================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.2s";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});


/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.boxShadow = "none";
    }
});












/* ================= CITY SEARCH FILTER ================= */

const searchForm = document.querySelector(".search-box form");

if (searchForm) {

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const city = document.querySelector(".search-box select").value.toLowerCase();
        const hotels = document.querySelectorAll(".hotel-card");

        hotels.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (city === "select city" || city === "all cities") {
                card.style.display = "block";
            }
            else if (text.includes(city)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
}