const API_KEY = "a0be9911b60dfebce9c1ed3f9a6d458f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const weather = document.querySelector("#weather #first");
        const degree = document.querySelector("#weather #mid");
        const city = document.querySelector("#weather span:last-child");

        degree.innerText = `🌝 : ${data.main.temp} ℃ `;
        city.innerText = `🚩 : `+data.name;
        weather.innerText = `🌏 : ${data.weather[0].main} `;
    });
}

function onGeoError(){
    weather.innerText = `Can't find you. No weather for you`;
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);