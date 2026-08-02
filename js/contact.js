const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycby_HwRPjbbQa8Oyqn0Ku70YfcQy5DC7AQS1GoBmmxolmaZMUInRtP7uYXeW_z8w2HUz/exec";

const contactForm = document.getElementById("contactform");
const status = document.getElementById("contactStatus");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    status.innerHTML = "Sending...";

    const formData = new URLSearchParams();

    formData.append("sheet", "Contact");
    formData.append("fullName", document.getElementById("fullname").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("organization", document.getElementById("organization").value);
    formData.append("userType", document.getElementById("usertype").value);
    formData.append("message", document.getElementById("message").value);

    try {

        const response = await fetch(WEB_APP_URL, {

            method: "POST",
            body: formData

        });

        const result = await response.json();
        if (result.status === "Success") {
            document.getElementById(contactform").reset();

            alert("Message sent successfuly!");
        });

        } else {

            alert(result.message || "Submission Failed");

        }

    } catch (err) {

        alert("Unable to submit the form...");

    }

});
