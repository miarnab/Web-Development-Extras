function checkValidity()
{
    alert("Hai");
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if(namePattern.test(name) && emailPattern.test(email) && passwordPattern.test(password) && passwordPattern.test(confirmpassword) && password==confirmpassword)
    {
        alert("Login Successful!");
    }
    else
    {
        alert("Login Denied!");
    }
}