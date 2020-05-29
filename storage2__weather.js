class Storage {
  constructor() {
    this.defaultCity = "Seoul";
    this.defaultCountry = "KR";
    this.city;
    this.country;
  }
  setToLs() {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
  getFromLs() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    if (localStorage.getItem("country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("country");
    }
    return {
      city: this.city,
      country: this.country,
    };
  }
}
