const clockVal = document.querySelector("h2#clock-tag");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes());
    const sec = String(date.getSeconds());
    
    clockVal.innerHTML = `${hour}:${min}:${sec}`;

}

getClock();
setInterval(getClock, 1000);
