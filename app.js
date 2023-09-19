const weatherForm = document.getElementById('weather-form');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtiene la ubicación ingresada por el usuario
  const location = document.getElementById('location').value;

  // Obtiene los datos del clima
  getWeather(location);
});

// Obtiene los datos del clima
function getWeather(location) {
  const apiKey = 'ab2b55e003764c1b7d83fa85d0b04288';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl)
    .then(response => {
      const data = response.data;

      // Muestra el resultado del clima
      const weatherResult = document.getElementById('weather-result');
      weatherResult.innerHTML = `
        <h2>Clima en ${data.name}, ${data.sys.country}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Condición: ${data.weather[0].description}</p>
        <p>Humedad: ${data.main.humidity}%</p>
        <p>Velocidad del viento: ${data.wind.speed} km/h</p>
        <p>Presión atmosférica: ${data.main.pressure} hPa</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener datos del clima:', error);
    });
}