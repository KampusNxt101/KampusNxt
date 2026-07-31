const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby5VyuaPCGO0qFKI12Z7TsvsXI9rfoNOemj40nsqSD-vIWno23g908nR2zFqn5eEnBN/exec"

document
.getElementById("subscribeForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    try{

        const formData = new FormData();
        formData.append("sheet","Subscribers");
        formData.append("email",email);

        const response = await fetch(WEB_APP_URL,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            message.style.display="block";
            message.className="success";
            message.innerHTML="🎉 Thank you for subscribing! You'll receive career updates in your inbox.";

            document.getElementById("subscribeForm").reset();

        }else{

            throw new Error();

        }

    }catch(error){

        message.style.display="block";
        message.className="error";
        message.innerHTML="Something went wrong. Please try again.";

    }

});
