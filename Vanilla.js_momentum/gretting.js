const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); // input 시에 페이지 변환 막는 prevent
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Helloo ${text}`;
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();

    }else{
        // exist user 
        paintGreeting(currentUser);
    }
}



function init(){
    loadName();
}

init();