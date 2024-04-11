let msg = document.getElementById("welMsg");
let btn =document.getElementById("btn");
if(localStorage.getItem("usres") != null){
    msg.innerHTML = `Welcome ${localStorage.getItem("userName")}`
}

function logOut(){
    window.location.href = "../index.html";
    localStorage.removeItem("usres")
}

btn.addEventListener('click' , logOut)