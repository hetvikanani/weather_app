const inputcity = document.querySelector("#inputcity");
const btn = document.querySelector("button");
const tmp = document.querySelector("#tmp");
const city = document.querySelector("#citya");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const logo = document.querySelector("#logo");
const weather_descriptions = document.querySelector("#weather_descriptions");
let counter = 0;
const extra = document.querySelectorAll(".extra-details span");
let globaltmp;
const weather = async () => {
  const hetvi = await fetch(
    "http://api.weatherstack.com/current?access_key=0d4bb77ebfd764638e4b588bd5ad4719&query=" +
      inputcity.value
  );
  const mydata = await hetvi.json();
  if (mydata.success === false) {
    location.href = "error.html";
  }
  console.log(mydata);
  globaltmp = mydata.current.temperature;
  tmp.innerHTML = `${mydata.current.temperature}  °C`;
  city.innerHTML = "City :" + mydata.location.name;
  city.href = "https://en.wikipedia.org/wiki/" + mydata.location.name;
  state.innerHTML = "State :" + mydata.location.region;
  country.innerHTML = "Country :" + mydata.location.country;
  extra[0].innerHTML = "Humidity :" + mydata.current.humidity + "%";
  extra[1].innerHTML = "Pressure :" + mydata.current.pressure + " Pa";
  extra[2].innerHTML = "Visibility :" + mydata.current.visibility;
  extra[3].innerHTML = "Wind-Speed :" + mydata.current.wind_speed + " km/h";

  weather_descriptions.innerHTML = mydata.current.weather_descriptions[0];
  logo.src = mydata.current.weather_icons[0];
};
const change = () => {
  if (counter === 0) {
    let fernhit = (globaltmp * 9) / 5 + 32;
    tmp.innerHTML = fernhit + "°F";
    counter = 1;
  } else {
    tmp.innerHTML = globaltmp + "°C";
    counter = 0;
  }
};
tmp.addEventListener("click", change);
btn.addEventListener("click", weather);
