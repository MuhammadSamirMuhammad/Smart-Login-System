let inputlogEmail = document.getElementById("logEmail");
let inputlogPassword = document.getElementById("logPassword");
let btn = document.querySelector(".btn");
let errMsg= document.getElementById("msg");
let allUser=[];
if(localStorage.getItem("usres") != null){
allUser = JSON.parse(localStorage.getItem("usres"))
}
function login(){
    if(checkInputsEmpty() == true){
        getMsg("All inputs is required", "red")
    }else{
        if(checkEmailAndPass() == true){
            window.location.href =`home/home.html`
            console.log("hello");
        }else{
            getMsg("Email or Password notCorrect", "red");
        }
    }

}

function checkEmailAndPass(){
    for (let i = 0; i < allUser.length; i++) {
    if(allUser[i].email == inputlogEmail.value && allUser[i].password == inputlogPassword.value){
      localStorage.setItem("userName" , allUser[i].userName);
        return true
    }        
    }
}

function getMsg(text, color) {
    msg.classList.replace("d-none", "d-block");
    msg.innerHTML = text;
    msg.style.color = color
}
function checkInputsEmpty() {
    if (  inputlogEmail.value == "" || inputlogPassword.value == "") {
        return true;
    } else {
        return false;
    }
}
btn.addEventListener("click" , login)