const apikey = "7d6e6749b309d6d1e4633769c53216d1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorElement = document.querySelector(".error");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

const weatherImages = {
  Clouds: "images/clouds.png",
  Clear: "images/clear.png",
  Rain: "images/rain.png",
  Drizzle: "images/drizzle.png",
  Mist: "images/mist.png",
};

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
  if (response.status === 404) {
    errorElement.style.display = "block";
  } else {
    const data = await response.json();
    cityElement.innerHTML = data.name;
    tempElement.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed} km/h`;

    const weatherMain = data.weather[0].main;
    if (weatherImages.hasOwnProperty(weatherMain)) {
      weatherIcon.src = weatherImages[weatherMain];
    }

    document.querySelector(".weather").style.display = "block";
    errorElement.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
