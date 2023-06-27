const apikey = "7d6e6749b309d6d1e4633769c53216d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon")
async function checkWeather() {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp + "°C");
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main === "Clouds"){
    weatherIcon.src= "images/clouds.png"
  } else if (data.weather[0].main === "Clouds"){
    weat
  }
    
  
}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox);
})


