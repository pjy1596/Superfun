class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.sea = document.getElementById("w-sea");
    this.feelslike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = weather.sys.country;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = weather.name;
    this.icon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/10d@2x.png"
    );
    // this.icon.textContent = weather.weather.icon;

    this.humidity.textContent = weather.main.humidity;
    this.sea.textContent = weather.clouds.all;
    this.feelslike.textContent = weather.main.feels_like;
    this.wind.textContent = weather.wind.speed;
  }
}
