document.addEventListener("DOMContentLoaded", function () {

```
// ==========================================
// GET FORM ELEMENTS
// ==========================================

const form = document.querySelector("#enrollmentForm");
const submitButton = document.querySelector(".enroll-button");

// Google Apps Script Web App URL
const APP_URL =
    "https://script.google.com/macros/s/AKfycbxyU5Br6EX-L2n27_JZdQFUL68K8qUKvjPuicw9uHH4YGfOJwYfvlCFHBXzrw8wgQVQ/exec";


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
// CREATE HIDDEN IFRAME
// ==========================================

let iframe = document.getElementById("googleSheetFrame");

if (!iframe) {

    iframe = document.createElement("iframe");

    iframe.id = "googleSheetFrame";
    iframe.name = "googleSheetFrame";

    iframe.style.display = "none";

    document.body.appendChild(iframe);
}


// ==========================================
// FORM SUBMISSION
// ==========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // ==========================================
    // COLLECT FORM VALUES
    // ==========================================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const learningMode =
        document.getElementById("learningMode").value;

    const message =
        document.getElementById("message").value.trim();


    // ==========================================
    // REQUIRED FIELD VALIDATION
    // ==========================================

    if (!name || !email || !mobile || !learningMode) {

        alert("Please fill in all required fields.");

        return;
    }


    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // ==========================================
    // MOBILE VALIDATION
    // ==========================================

    const mobilePattern =
        /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    // ==========================================
    // DISABLE BUTTON
    // ==========================================

    submitButton.disabled = true;

    submitButton.innerText = "Submitting...";


    // ==========================================
    // CREATE TEMPORARY FORM
    // ==========================================

    const submitForm =
        document.createElement("form");

    submitForm.method = "POST";

    submitForm.action = APP_URL;

    submitForm.target = "googleSheetFrame";

    submitForm.style.display = "none";


    // ==========================================
    // ADD DATA
    // ==========================================

    const fields = {
        sheet: "Enrollment",
        name: name,
        email: email,
        mobile: mobile,
        learning_mode: learningMode,
        message: message
    };


    Object.keys(fields).forEach(function (key) {

        const input =
            document.createElement("input");

        input.type = "hidden";

        input.name = key;

        input.value = fields[key];

        submitForm.appendChild(input);
    });


    // ==========================================
    // SUBMIT TO GOOGLE APPS SCRIPT
    // ==========================================

    document.body.appendChild(submitForm);

    submitForm.submit();


    // ==========================================
    // SHOW SUCCESS MESSAGE
    // ==========================================

    setTimeout(function () {

        alert(
            "Thank you for your enrollment!\n\n" +
            "We have received your details and our team will contact you shortly."
        );

        form.reset();

        submitButton.disabled = false;

        submitButton.innerText =
            "Submit Enrollment";

        submitForm.remove();

    }, 1500);

});
```

});
