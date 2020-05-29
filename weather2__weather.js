class Weather {
  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.apiKey = "7d8881e734a32305657875f739f14a3c";
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }
  changeWeather(newCity, newCountry) {
    this.city = newCity;
    this.country = newCountry;
  }
}
