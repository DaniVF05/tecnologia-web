const trackDestinos = document.getElementById("carousel-track");
const trackReservas = document.getElementById("reservas-track");
const modal = document.getElementById("modal");

let posDestinos = 0;
let posReservas = 0;

fetch("data/turismo-santacruz.json")
  .then(res => res.json())
  .then(data => {
    crearCarrusel(data.destinos, trackDestinos);
    crearCarrusel(data.reservas, trackReservas);
  });

function crearCarrusel(lista, track) {
  const items = lista.concat(lista);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>${item.descripcionCorta}</p>
    `;

    card.onclick = () => abrirModal(item);
    track.appendChild(card);
  });
}

setInterval(() => {
  posDestinos += 1;
  trackDestinos.style.transform = `translateX(-${posDestinos}px)`;
  if (posDestinos >= trackDestinos.scrollWidth / 2) posDestinos = 0;

  posReservas += 1;
  trackReservas.style.transform = `translateX(-${posReservas}px)`;
  if (posReservas >= trackReservas.scrollWidth / 2) posReservas = 0;
}, 30);

function abrirModal(item) {
  document.getElementById("modal-img").src = item.imagen;
  document.getElementById("modal-title").textContent = item.nombre;
  document.getElementById("modal-desc").textContent = item.descripcionLarga;
  document.getElementById("modal-tipo").textContent = item.tipo;
  document.getElementById("modal-ubicacion").textContent = item.ubicacion;
  modal.style.display = "block";
}

document.getElementById("close-modal").onclick = () => {
  modal.style.display = "none";
};
