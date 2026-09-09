document.addEventListener("DOMContentLoaded", function () {

// ==========================================
// LOAD HEADER
// ==========================================

fetch("header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load header.html");
        }

        return response.text();
    })
    .then(data => {

        const header = document.getElementById("header");

        if (header) {
            header.innerHTML = data;

            // Mobile menu
            const menuToggle = document.getElementById("menu-toggle");
            const navLinks = document.getElementById("nav-links");

            if (menuToggle && navLinks) {

                menuToggle.addEventListener("click", function () {
                    navLinks.classList.toggle("active");
                });

            }
        }

    })
    .catch(error => {
        console.error("Error loading header:", error);
    });


// ==========================================
// LOAD FOOTER
// ==========================================

fetch("footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load footer.html");
        }

        return response.text();
    })
    .then(data => {

        const footer = document.getElementById("footer");

        if (footer) {
            footer.innerHTML = data;
        }

    })
    .catch(error => {
        console.error("Error loading footer:", error);
    });

});
