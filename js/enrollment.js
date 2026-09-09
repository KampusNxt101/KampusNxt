document.addEventListener("DOMContentLoaded", function () {

// ==========================================
// GET FORM ELEMENTS
// ==========================================

const form = document.querySelector("#enrollmentForm");
const submitButton = document.querySelector(".enroll-button");

// Google Apps Script Web App URL
const APP_URL =
    "https://script.google.com/macros/s/AKfycbyoXH5954lKRqDHBoO90JmUN8dAzYwW2YZbHM2j4y4RBkBtZB58972xbmfYBdn23fJo/exec";


// ==========================================
// CHECK FORM
// ==========================================

if (!form) {
    console.error("Enrollment form not found.");
    return;
}

if (!submitButton) {
    console.error("Submit button not found.");
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
        mobile: document.getElementById("mobile").value.trim(),
        learningMode: document.getElementById("learningMode").value,
        message: document.getElementById("message").value.trim()
    };


    // ==========================================
    // REQUIRED FIELD VALIDATION
    // ==========================================

    if (
        !formData.name ||
        !formData.email ||
        !formData.mobile ||
        !formData.learningMode
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
    // MOBILE VALIDATION
    // ==========================================

    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(formData.mobile)) {
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

    data.append("sheet", "Enrollment");

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("learning_mode", formData.learningMode);
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
            "Thank you for your enrollment!\n\n" +
            "We have received your details and our team will contact you shortly."
        );


        // Clear form
        form.reset();


    } catch (error) {

        console.error("Enrollment Submission Error:", error);

        alert(
            "Something went wrong while submitting your enrollment. " +
            "Please try again later."
        );

    } finally {

        // ==========================================
        // ENABLE BUTTON
        // ==========================================

        submitButton.disabled = false;
        submitButton.innerText = "Submit Enrollment";

    }

});
```

});
