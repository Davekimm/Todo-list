const API_KEY = "0e2b4f5d681986d67466c56833d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        city.innerHTML = data.name;
        const weather = document.querySelector("#weather span:last-child");
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp} degrees`;
    });
}

function onGeoFail(){
    alert("Can't find you. No weather info");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);


