const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window;
const document = window.document;

var jsonDataContainer = document.getElementById("json-data");


fetch('data.json')
    .then(response => response.json())
    .then(data => {

        jsonDataContainer.innerHTML = `
            <p><strong>Sala:</strong> ${data.SL_SKROT}</p>
            <p><strong>Dzień:</strong> ${data.dzien}</p>
            <p><strong>Początek:</strong> ${data.poczatek}</p>
            <p><strong>Koniec:</strong> ${data.koniec}</p>
        `;
    })
    .catch(error => console.error('Błąd podczas ładowania pliku JSON:', error));

document.addEventListener('DOMContentLoaded', function () {
  const planLekcji = document.getElementById('planLekcji');
  const zegar = document.getElementById('zegar');

  const dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

  for (let i = 0; i < 5; i++) {
      const dzien = document.createElement('div');
      dzien.className = 'dzien';
      dzien.innerHTML = `<h2>${dniTygodnia[i]}</h2>`;


      const lekcjeContainer = document.createElement('div');
      lekcjeContainer.className = 'lekcje-container';
      dzien.appendChild(lekcjeContainer);

      for (let j = 0; j < 5; j++) {
          const lekcja = document.createElement('div');
          lekcja.className = 'lekcja';
          lekcja.innerHTML = `<span>Lekcja ${j + 1}</span><br><span>Godzina rozpoczęcia: ${10 + j}:00</span> <button class="button" onclick="edytujLekcje(${i}, ${j})">Edytuj</button>`;
          lekcjeContainer.appendChild(lekcja);
      }

      planLekcji.appendChild(dzien);
  }

  function aktualizujZegar() {
      const now = new Date();
      const godzina = now.getHours();
      const minuta = now.getMinutes();
      const sekunda = now.getSeconds();
      const czas = `${godzina < 10 ? '0' : ''}${godzina}:${minuta < 10 ? '0' : ''}${minuta}:${sekunda < 10 ? '0' : ''}${sekunda}`;
      zegar.textContent = `Aktualny czas: ${czas}`;
  }

  setInterval(aktualizujZegar, 1000);