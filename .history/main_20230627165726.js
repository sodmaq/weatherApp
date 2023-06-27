// API key for accessing OpenWeatherMap API
const apikey = "7d6e6749b309d6d1e4633769c53216d1";
// API URL for fetching weather data
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting necessary DOM elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check weather for a given city
async function checkWeather(city) {
  // Fetch weather data for the city using the API
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  // Check if the response is a 404 error
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    // Parse the response data as JSON
    var data = await response.json();

    // Update the DOM with the weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Set the weather icon based on the weather condition
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    // Display the weather information and hide the error message
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Event listener for the search button click
searchBtn.addEventListener("click", () => {
  // Call the checkWeather function with the value from the search input box
  checkWeather(searchBox.value);
});
alert("you got hacked");
