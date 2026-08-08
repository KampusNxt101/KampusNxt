document.addEventListener("DOMContentLoaded", function () {

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;const menuToggle = document.getElementById("menu-toggle");
            const navLinks = document.getElementById("nav-links");

            if (menuToggle && navLinks) {

                menuToggle.addEventListener("click", function () {
                    navLinks.classList.toggle("active");
                });

            }

        })
        .catch(error => {
            console.error("Error loading header:", error);
        });

});
// Load Footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


