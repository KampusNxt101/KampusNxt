document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // GET FORM ELEMENTS
    // ==========================================

    const form = document.querySelector("#freewebinarform");
    const submitButton = document.querySelector(".submit-btn");

    // Google Apps Script Web App URL
    const APP_URL =
        "https://script.google.com/macros/s/AKfycbwcoHK2085YgRtykgKqhCs0QDh_ZNDNAwUlN6z5W0m4FN-OnXaE7itj3hhcytXx1wyw/exec";


    // ==========================================
    // CHECK FORM
    // ==========================================

    if (!form) {
        console.error("Webinar registration form not found.");
        return;
    }


    // ==========================================
    // FORM SUBMISSION
    // ==========================================

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
        // CREATE FORM DATA
        // ==========================================

        const data = new URLSearchParams();

        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("college", formData.college);
        data.append("designation", formData.designation);
        data.append("students", formData.students);
        data.append("message", formData.message);


        // ==========================================
        // SEND TO GOOGLE APPS SCRIPT
        // ==========================================

        try {

            await fetch(APP_URL, {

                method: "POST",
                mode: "no-cors",
                body: data

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

            // ==========================================
            // ENABLE BUTTON
            // ==========================================

            submitButton.disabled = false;
            submitButton.innerText = "Request Free Webinar";

        }

    });

});
