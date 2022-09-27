// [Variáveis e seleção de elementos]
const apiKey = "c51de47c54cdbf0d89bfa4ba484a079b";
const apiCountryURL = "https://countryflagsapi.com/png/";


window.onload = function() {
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

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

