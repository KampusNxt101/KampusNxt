document.addEventListener("DOMContentLoaded", function () {

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
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


