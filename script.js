fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c55c14c479d3907fa882152e9dd99bdb"
)
  .then((response) => response.json())
  .then((data) => {
    let C = data.main.temp - 273.15;
    document.getElementById("C").innerHTML = C.toFixed(2) + " °C";
    document.getElementById("Cloudy").innerHTML = data.weather[0].main;
    document.getElementById("wind").innerHTML =
      "Wind speed: " + data.wind.speed + " Kh/h";

    document.getElementById("Humidity").innerHTML =
      "Humidity: " + data.main.humidity + "%";
  });
