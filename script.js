// getting elements
let searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const element_cityName = document.querySelector(".city");
const element_temperature = document.querySelector(".temperature");
const element_description = document.querySelector(".description");
const element_weatherIcon = document.querySelector(".weather-icon");

const element_card = document.querySelector(".card");

// when user clicks the search button
searchButton.addEventListener("click", myAPI);

function myAPI() {
  // set cityName to be used in the api url to the searchInput value
  let cityName = searchInput.value;
  const apiKey = "d3a0df086ed3dcae5d358474113fe240"; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  //   let cityName = searchInput.value;

  fetch(apiUrl) // Replace with the actual API URL
    .then((response) => response.json())
    .then((data) => {
      element_cityName.textContent = data.name;
      element_temperature.textContent = Math.round(data.main.temp) + "°F";
      element_description.textContent = data.weather[0].description;

      if (data.weather[0].main == "Clouds") {
        element_weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        element_weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        element_weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        element_weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        element_weatherIcon.src = "images/mist.png";
      } else if (data.weather[0].main == "Humidity") {
        element_weatherIcon.src = "images/humidity.png";
      } else if (data.weather[0].main == "Rain") {
        element_weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Wind") {
        element_weatherIcon.src = "images/wind.png";
      } else if (data.weather[0].main == "Snow") {
        element_weatherIcon.src = "images/snow.png";
      } else {
        element_weatherIcon.src = "";
      }
      //
      const icon = data.weather[0].icon;
      const isDay = icon.includes("d");

      if (isDay) {
        console.log("It is day.");
        
        
    } else {
        console.log("It is night.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      element_weatherIcon.src = "";
      element_temperature.textContent = "";
      element_cityName.textContent = "";
      element_description.textContent = "enter a valid city name";
    });
}
