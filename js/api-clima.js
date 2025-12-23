const apiKey = "7244da43068d2e37864231c8ae155477";
const ciudad = "Santa Cruz de la Sierra";

const climaInfo = document.getElementById("clima-info");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la API");
    }
    return response.json();
  })
  .then(data => {
    climaInfo.innerHTML = `
      <strong>${ciudad}</strong><br>
      🌡 Temperatura: ${data.main.temp} °C<br>
      🌥 Estado: ${data.weather[0].description}<br>
      💧 Humedad: ${data.main.humidity}%
    `;
  })
  .catch(error => {
    climaInfo.textContent = "No se pudo cargar el clima en este momento.";
    console.error(error);
  });
