document
.getElementById("consultationFormData")
.addEventListener("submit", async function (e) {

e.preventDefault();

const button = document.getElementById("submitBtn");

button.disabled = true;
button.innerText = "Submitting...";

const data = {

sheet: "Consultations",

institution:
document.getElementById("institution").value,

contactPerson:
document.getElementById("contactPerson").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

city:
document.getElementById("city").value,

batch:
document.getElementById("batch").value,

checkbox:
document.getElementById("checkbox").value,

message:
document.getElementById("message").value

};

try {

const response = await fetch(WEB_APP_URL, {

method: "POST",

body: new URLSearchParams(data)

});

const result = await response.text();

if (result.includes("Success")) {

document.getElementById("consultationFormData").reset();

document.getElementById("successMessage").style.display =
"block";

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

} else {

alert(result);

}

} catch (err) {

alert("Unable to submit the form.");

}

button.disabled = false;
button.innerText = "Book My Consultation";

});
