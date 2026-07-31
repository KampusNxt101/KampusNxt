document
.getElementById("partnerForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data={

        sheet:"Partner",

        organization:document.getElementById("organization").value,

        contactPerson:document.getElementById("contactPerson").value,

        email:document.getElementById("email").value,

        phone:document.getElementById("phone").value,

        partnershipType:document.getElementById("partnershipType").value,

        message:document.getElementById("message").value

    };

    try{

        const result=await submitForm(data);

        if(result.status==="success"){

            alert("Thank you! Partnership request submitted.");

            document.getElementById("partnerForm").reset();

        }

    }

    catch{

        alert("Something went wrong.");

    }

});