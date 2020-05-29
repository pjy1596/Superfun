const storage = new Storage();
const getFromStorage = storage.getFromLs();
const weather = new Weather(getFromStorage.city, getFromStorage.country);
const ui = new UI();
// weather.changeWeather("London", "GB");
document.addEventListener("DOMContentLoaded", weatherMake);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const cityInput = document.getElementById("city").value;
  const countryInput = document.getElementById("country").value;
  weather.changeWeather(cityInput, countryInput);
  storage.setToLs(cityInput, countryInput);
  weatherMake();
  $("#locModal").modal("hide");
});

function weatherMake() {
  weather
    .getWeather()
    .then((res) => ui.paint(res))
    .catch((err) => console.log(err));
}
