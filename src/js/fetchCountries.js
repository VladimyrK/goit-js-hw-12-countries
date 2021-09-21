export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('нет ответа с сервера');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('ошибка');
    });
}
