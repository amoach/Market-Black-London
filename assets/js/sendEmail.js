function sendMail(form) {
    emailjs.send("gmail", "market", {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
        "marketblack_enquiry": form.message.value
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


