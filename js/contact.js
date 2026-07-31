const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbyMKmhbgtbiihSU1HI4jS_dFI4O3x00tGSV1-wf0OpDP6f8La_N8KUl8zNm8ZInBiA0/exec";

const contactForm = document.getElementById("contactForm");
const status = document.getElementById("contactStatus");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    status.innerHTML = "Sending...";

    const formData = new URLSearchParams();

    formData.append("sheet", "Contact");
    formData.append("fullName", document.getElementById("fullName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("organization", document.getElementById("organization").value);
    formData.append("userType", document.getElementById("userType").value);
    formData.append("message", document.getElementById("message").value);

    try {

        const response = await fetch(WEB_APP_URL, {

            method: "POST",
            body: formData

        });

        const result = await response.text();

        if (result === "Success") {

            status.style.color = "green";
            status.innerHTML =
                "✅ Thank you! Your message has been submitted successfully.";

            contactForm.reset();

        } else {

            throw new Error(result);

        }

    } catch (err) {

        status.style.color = "red";
        status.innerHTML =
            "❌ Unable to submit the form. Please try again.";

        console.error(err);

    }

});
