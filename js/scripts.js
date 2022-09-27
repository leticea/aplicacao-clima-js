// [Variáveis e seleção de elementos]
const apiKey = "c51de47c54cdbf0d89bfa4ba484a079b";
const apiCountryURL = "https://countryflagsapi.com/png/";


window.onload = function() {
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

// [Funções]
const showWeatherData = (city) => {
    console.log(city);
}

// [Eventos]
searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

    
});
};

