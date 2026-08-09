document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) {
        console.error("Webinar registration form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Collect all form values
        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            college: document.getElementById("college").value.trim(),
            designation: document.getElementById("designation").value,
            students: document.getElementById("students").value,
            message: document.getElementById("message").value.trim()
        };

        // Display collected data in browser console
        console.log("Webinar Request:");
        console.log(formData);

        // Basic validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.college ||
            !formData.designation
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Success message for now
        alert(
            "Thank you for requesting a webinar. " +
            "Our team will contact you shortly."
        );

        // Reset form
        form.reset();

    });

});