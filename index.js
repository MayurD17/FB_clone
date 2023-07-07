var loginform = document.getElementById('loginform');

loginform.addEventListener('submit',function(e){
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    document.getElementById("emailError").innerHTML = "";
      document.getElementById("passwordError").innerHTML = "";

      if (email === "") {
        document.getElementById("emailError").innerHTML = "The email address or mobile number you entered isn't connected to an account. Find your account and log in.";
        return;
      }

      // Check if password is empty
      if (password === "") {
        document.getElementById("passwordError").innerHTML = "The password that you've entered is incorrect. Forgotten password?";
        return;
      }
})

function newpage(){
    window.location.href="pass.html";
}

function backtologin(){
    window.location.href="index.html";
}

