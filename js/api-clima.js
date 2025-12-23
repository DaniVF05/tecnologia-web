const apiKey = "7244da43068d2e37864231c8ae155477";
const ciudad = "Santa Cruz de la Sierra,BO";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("clima-texto").textContent =
      `Temperatura: ${data.main.temp}°C | ${data.weather[0].description}`;
  })
  .catch(() => {
    document.getElementById("clima-texto").textContent =
      "No se pudo cargar el clima.";
  });

