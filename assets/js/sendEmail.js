function sendMail(form) {
    emailjs.send("service_6081s2m", "Market", {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
        "message": form.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}


