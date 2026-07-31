document
.getElementById("consultationForm")
.addEventListener("submit", async function (e) {

e.preventDefault();

const button = document.getElementById("submitBtn");

button.disabled = true;
button.innerText = "Submitting...";

const data = {

sheet: "Consultation",

institution:
document.getElementById("institution").value,

contactPerson:
document.getElementById("contactPerson").value,

designation:
document.getElementById("designation").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

city:
document.getElementById("city").value,

students:
document.getElementById("students").value,

department:
document.getElementById("department").value,

challenge:
document.getElementById("challenge").value,

date:
document.getElementById("date").value,

time:
document.getElementById("time").value,

notes:
document.getElementById("notes").value

};

try {

const response = await fetch(WEB_APP_URL, {

method: "POST",

body: new URLSearchParams(data)

});

const result = await response.text();

if (result.includes("Success")) {

document.getElementById("consultationForm").reset();

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