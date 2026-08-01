console.log("Portfolio Website Loaded Successfully");

/* ============================
   CONTACT FORM — UNCHANGED LOGIC
   (backend / MongoDB integration untouched)
============================ */
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value
    };

    try {
        const response = await fetch(
            "https://portfolio-backend-69ax.onrender.com/api/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        console.log(result);
        alert(result.message);

    } catch (error) {
        console.error(error);
        alert("Failed to send message.");
    }
});

/* ============================
   MOBILE NAV TOGGLE
============================ */
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector("nav ul");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
    });

    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("open");
        });
    });
}

/* ============================
   ACTIVE NAV HIGHLIGHTING (scroll spy)
============================ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active-link",
                    link.getAttribute("href") === `#${id}`
                );
            });
        }
    });
}, {
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0
});

sections.forEach(section => spyObserver.observe(section));

/* ============================
   SCROLL REVEAL ANIMATIONS
============================ */
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealEls.forEach(el => revealObserver.observe(el));