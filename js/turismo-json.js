fetch("data/turismo-santacruz.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("lugares-container");

    data.forEach(lugar => {
      container.innerHTML += `
        <article class="card">
          <img src="${lugar.imagen}" alt="${lugar.nombre}">
          <div class="card-content">
            <h3>${lugar.nombre}</h3>
            <p>${lugar.descripcion}</p>
          </div>
        </article>
      `;
    });
  });
