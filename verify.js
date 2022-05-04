let attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var password = document.getElementById("password").value;
if ( username == "hita.kalani" && password == "hitak27"|| username=="lakshya.siroya"&&password=="lakshyas01"||username == "prisha.kotecha" && password == "prishak02"||username == "jeel.datani" && password=="jeeld03"||username=="name.surname"&&password=="password"){
alert ("Hello " + username + " Thanks for logging in, click on ok to continue");
window.location = "addition-grade8-gibbonware-maintrue.html"; 
return false;
}
else{
attempt --;
alert("Unauthorised Username or Password");


    
 if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
alert ("Your login rights have been suspended");

return false;
}
}
}
