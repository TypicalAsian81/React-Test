function validate(){
   var username = document.getElementById("username").value
   var password = document.getElementById("password").value
   
   if(username=="tutu" && password=="tutu2003"){
    alert("login successful!");
    window.open("http://localhost:3000/");
    return false;
   }
   else{
    alert("Login Failed(invalid authentication)");
   }
   
}