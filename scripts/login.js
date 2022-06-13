document.querySelector("form").addEventListener("submit",verifyDetails);

var userVerificationDetails = JSON.parse(localStorage.getItem('userdata'));


function verifyDetails(){
    event.preventDefault();

    var emailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    userVerificationDetails.array.forEach(element => {
        if((emailid == element.userEmail || emailid == element.userMobile) && password == element.userPassword){
            alert('LogIn Successfull')
            window.localStorage.href = "./index.html"
        }
        else{
            alert('Invalid Credentials!')
        }
    });


}