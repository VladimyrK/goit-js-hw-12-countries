import fetchCountries from './fetchCountries.js';
import countryTemp from '../templates/country.hbs';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { defaults } from '@pnotify/core';

import debounce from 'lodash.debounce';

defaultModules.set(PNotifyMobile, {});
defaults.addClass = 'pnotify';
defaults.width = '600px';
defaults.maxTextHeight = null;

const input = document.querySelector('.input');
const list = document.querySelector('.list');

// let name = '';

input.addEventListener(
  'input',
  debounce(e => {
    let countries = fetchCountries(e.target.value);
    displayFetchData(countries);
    if (e.target.value === '') {
      list.innerHTML = '';
    }
  }, 500),
);

function displayFetchData(fetch) {
  fetch.then(data => {
    if (data.length > 10) {
      list.innerHTML = '';

      alert({
        text: 'Слишком много результатов запроса. Сделайте запрос более специфичным.',
      });
      return;
    } else if (data.length > 2 && data.length <= 10) {
      list.innerHTML = '';

      let html = data
        .map(e => {
          return `<li>${e.name}</li>`;
        })
        .join('');
      list.insertAdjacentHTML('beforeend', html);
    } else {
      list.innerHTML = '';

      const html = countryTemp(data[0]);
      list.insertAdjacentHTML('beforeend', html);
    }
    console.log(data);
  });
}
