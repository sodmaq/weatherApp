
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apikey}`;


async function checkWeather() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}
checkWeather();
