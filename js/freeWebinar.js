document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("freewebinarform");
    const submitButton = document.querySelector(".submit-btn");

    // Google Apps Script Web App URL
    const APP_URL = "https://script.google.com/macros/s/AKfycbxxApxlk_9pQ52_gYFWZeBKYGmcOcDh-pMzU5uP_uNqfPst4EJWojdL_couIDBOt19o/exec";
    if (!form) {
        console.error("Webinar registration form not found.");
        return;
    }


    form.addEventListener("submit", async function (event) {

        event.preventDefault();


        // ==========================================
        // COLLECT FORM VALUES
        // ==========================================

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            college: document.getElementById("college").value.trim(),
            designation: document.getElementById("designation").value,
            students: document.getElementById("students").value,
            message: document.getElementById("message").value.trim()
        };


        // ==========================================
        // REQUIRED FIELD VALIDATION
        // ==========================================

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


        // ==========================================
        // EMAIL VALIDATION
        // ==========================================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // ==========================================
        // PHONE VALIDATION
        // ==========================================

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(formData.phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;
        }


        // ==========================================
        // DISABLE BUTTON
        // ==========================================

        submitButton.disabled = true;

        submitButton.innerText = "Submitting...";


        // ==========================================
        // SEND DATA TO GOOGLE APPS SCRIPT
        // ==========================================

        try {

            await fetch(APP_URL, {

                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)

            });


            // ==========================================
            // SUCCESS MESSAGE
            // ==========================================

            alert(
                "Thank you for requesting a webinar!\n\n" +
                "Our team will review your request and contact you shortly."
            );


            // Clear form
            form.reset();


        } catch (error) {

            console.error("Submission Error:", error);

            alert(
                "Something went wrong while submitting your request. " +
                "Please try again later."
            );

        } finally {

            // Enable button
            submitButton.disabled = false;

            submitButton.innerText = "Request Free Webinar";

        }

    });

});
