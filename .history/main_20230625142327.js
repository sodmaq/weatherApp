const apikey = "7d6e6749b309d6d1e4633769c53216d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather() {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if(response.status===404){
     document.querySelector("error").style.display="block"
     document.querySelector("error ").style.display="none"

  }else{

  }


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox);
});
