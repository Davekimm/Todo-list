const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";

function loginSubmit(e){
    e.preventDefault();
    let userName = loginInput.value;

    if(localStorage.getItem("username") != userName){
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem("username", userName);
        greeting.innerHTML = "Hello " + userName;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }else{
        alert("Already exists!");
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
    }
    
}

loginForm.addEventListener("submit", loginSubmit);




