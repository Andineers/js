const apikey ="9f3fbffc5df59cc56e78bf87365f81ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid="

async function checkWeather(){
  const response = await fetch(apiUrl + apikey);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°c";
  document.querySelector(".humadity").innerHTML = data.main.humadity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}