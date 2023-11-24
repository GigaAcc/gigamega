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
    .catch(error => console.error('Błąd jakiś:', error));

