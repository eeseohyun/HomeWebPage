const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const consumer = document.getElementById("consumer");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(tomato) {
    tomato.preventDefault();  //브라우저의 기본동작 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //consumer.innerText = "Hello " + username; //string + string
    //consumer.innerText = `Hello ${username} !`; //string + valuables
    //consumer.classList.remove(HIDDEN_CLASSNAME);
    paintConsumer(username);
}


loginForm.addEventListener("submit", loginSubmit);

function paintConsumer(username){
    consumer.classList.remove(HIDDEN_CLASSNAME);
    consumer.innerText = `Hello ${savedUsername}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);//show the form
} else {
    paintConsumer(savedUsername);//show the consumer
}