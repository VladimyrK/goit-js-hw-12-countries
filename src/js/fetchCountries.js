export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('ЧТО-ТО НЕ ТАК');
      }
    })
    .then(data => {
      return data;
    });
}
