// getting elements
let searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const element_cityName = document.querySelector(".city");
const element_temperature = document.querySelector(".temperature");
const element_description = document.querySelector(".description");

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
      element_temperature.textContent = data.main.temp + "°F";
      element_description.textContent = data.weather[0].description;

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
