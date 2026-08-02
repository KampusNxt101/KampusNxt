APP_URL = "https://script.google.com/macros/s/AKfycbzkNJyxiTg6QN75C01VTQ0QHwiPhbC4LuptPoAcCX5ecUdmu1-wCOXrwkKzpLJLv_mI/exec";
  
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

const response = await fetch(APP_URL, {

method: "POST",
headers:{
        "Content-Type":"application/json"
    },

body:JSON.stringify(data)
});

const result = await response.text();

if (result.includes("Success")) {

document.getElementById("consultationFormData").reset();


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
