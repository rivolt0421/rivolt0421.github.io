const city = document.querySelector(".weather__city");
const info = document.querySelector(".weather__info");
const API_KEY = "6dd925ac9322b22565b1eda9154a5a44";

function geoYes(position) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.name;
      info.textContent = `${data.weather[0].main}    ${data.main.temp}℃`;
    });
}
function geoNo() {
  console.log("OK then.");
}
navigator.geolocation.getCurrentPosition(geoYes, geoNo);
