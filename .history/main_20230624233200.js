const apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=`;
const apikey = "7d6e6749b309d6d1e4633769c53216d1";

async function checkWeather() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}
checkWeather();
