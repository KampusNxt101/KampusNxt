const APP_URL = "https://script.google.com/macros/s/AKfycby_HwRPjbbQa8Oyqn0Ku70YfcQy5DC7AQS1GoBmmxolmaZMUInRtP7uYXeW_z8w2HUz/exec";
  
document
.getElementById("consultationFormData")
.addEventListener("submit", async function (e) {

e.preventDefault();

const button = document.getElementById("submitBtn");

const challenges = [];
document
.querySelectorAll('input[name="challenge"]:checked')
.forEach(cb => {
    challenges.push(cb.value);
});


button.disabled = true;
button.innerText = "Submitting...";

const data = {

sheet: "Consultations",

institution: document.getElementById("institution").value,

contactPerson: document.getElementById("contactPerson").value,

email: document.getElementById("email").value,

phone: document.getElementById("phone").value,

city: document.getElementById("city").value,

batch: document.getElementById("batch").value,

placementChallenges: challenges.join(", "),

message: document.getElementById("message").value,

mode: document.getElementById("mode").value
};

try {
const formData = new FormData();

Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
});

const response = await fetch(APP_URL, {
    method: "POST",
    body: formData
});  

const result = await response.json();

if (result.status === "success") {
    document.getElementById("consultationFormData").reset();

    alert("Consultation request submitted successfully!");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
} else {
    alert(result.message || "Submission failed.");
}
} catch (err) {

alert("Unable to submit the form.");

}

button.disabled = false;
button.innerText = "Book My Consultation";

});
