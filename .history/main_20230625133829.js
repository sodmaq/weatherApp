const apikey = "7d6e6749b309d6d1e4633769c53216d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";


  async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML=data.name
  document.querySelector(".temp").innerHTML=data.main.temp
  document.querySelector(".humidity").innerHTML=data.main.humidity

}
checkWeather();
