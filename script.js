// const apiKey = "b7a52d7fcd9e1272b729585f03fc244a";

// // show city"

// const resultCity = document.querySelector("#city");
// const searchValue = document.querySelector("#search-text-input");

// function searchingCity(event) {
//   event.preventDefault();
//   resultCity.innerHTML = searchValue.value;
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&units=metric`;
//   axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
// }

// let form = document.querySelector("#search");
// form.addEventListener("submit", searchingCity);

// // show temperature
// const temperature = document.querySelector("#temperature");
// let temperatureValue;

// function getTemperature(response) {
//   temperatureValue = Math.round(response.data.main.temp);
//   temperature.innerHTML = `${temperatureValue}`;
//   showAdvise();
// }

// function showCelsius() {
//   temperature.innerHTML = `Actually that was celsius degrees 😳 ${temperatureValue}`;
// }

// function showFarenheit() {
//   temperature.innerHTML = "I can't count Farenheit 🙇🏻‍♀️";
// }

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", showCelsius);
// let farenheit = document.querySelector("#farenheit");
// farenheit.addEventListener("click", showFarenheit);

// get location
function showPosition(position) {
  console.log(position);
}
navigator.geolocation.getCurrentPosition(showPosition);
// function findLocation() {
//   console.log();
// }

// let location = document.querySelector("#location");
// location.addEventListener("click", findLocation);

// show date
// let now = new Date();
// let date = now.getDate();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let year = now.getFullYear();
// let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let month = months[now.getMonth()];
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sad"];
// let day = days[now.getDay()];

// let today = document.querySelector("#date");
// today.innerHTML = `${day}, ${date} ${month} , ${hours}:${minutes}`;

// // show advise
// let advise = document.querySelector("#advise");
// function showAdvise() {
//   if (temperatureValue > 0 && temperatureValue <= 15) {
//     advise.innerHTML = "It's not much warm today";
//   } else if (temperatureValue > 15 && temperatureValue <= 25) {
//     advise.innerHTML = "It's pretty warm today";
//   } else if (temperatureValue >= 25) {
//     advise.innerHTML = "It's pretty hot today";
//   } else if (temperatureValue <= 0 && temperatureValue >= -15) {
//     advise.innerHTML = "It's pretty cold today";
//   } else {
//     advise.innerHTML = "We don't reccomend to go out today)";
//   }
// }
