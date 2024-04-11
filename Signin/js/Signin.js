let inputSignupName = document.getElementById("SignupName");
let inputSignupEmail = document.getElementById("SignupEmail");
let inputSignupPassword = document.getElementById("SignupPassword");
let signupBtn = document.querySelector(".btn");
let msg = document.getElementById("msg");
// let errMsgInput= document.getElementById("msg")

let allUser = [];
if (localStorage.getItem("usres") != null) {
    allUser = JSON.parse(localStorage.getItem("usres"))
}

function addNewUser() {
    let data = {
        userName: inputSignupName.value,
        email: inputSignupEmail.value,
        password: inputSignupPassword.value
    }

    if (checkInputsEmpty() == true) {
        getMsg("All inputs is required", "red")

    }
    else {
        if (checkEmailExist() == true) {
            getMsg("Email Already Exist", "red")
        }
        else {
            allUser.push(data);
            localStorage.setItem("usres", JSON.stringify(allUser));
            clearForm();
            getMsg("Success", "green");

        }

    }


};

function getMsg(text, color) {
    msg.classList.replace("d-none", "d-block");
    msg.innerHTML = text;
    msg.style.color = color
}

function clearForm() {
    inputSignupName.value = "";
    inputSignupEmail.value = "";
    inputSignupPassword.value = ""

}
function checkInputsEmpty() {
    if (inputSignupName.value == "" || inputSignupEmail.value == "" || inputSignupPassword.value == "") {
        return true;
    } else {
        return false;
    }
}
function checkEmailExist() {
    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email == inputSignupEmail.value) 
            return true;
        
    }
}

signupBtn.addEventListener("click", addNewUser);
