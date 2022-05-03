const user = 'db.json';
const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
let str = '';

const getData = (file) => {
  return fetch(file)
    .then(response => response.json())
    // .then(data => JSON.stringify(data))
    .catch(error => console.log(error));
};

const sendData = (url,data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    }).then(response => response.json());
};
// str = getData(dataBaseUrl);
sendData(dataBaseUrl,getData(user))
  .then(data => console.log(data));
