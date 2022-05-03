  const user = 'db.json';
  const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  const getData = (file) => {
    return fetch(file)
      .then(response => response.json());
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
  
  const promise = (userData) => {
    return new Promise ((resolve,reject) => {
      resolve(getData(userData));
    });
  };
  
  promise(user)
    .then(data => sendData(dataBaseUrl,data))
    .then(data => console.log(data))
    .catch((errMessage) => console.log(errMessage))
    .finally(() => console.log('finally'));

  // 
  // const user = 'db.json';
  // const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  // let str = '';
  
  // const getData = (file) => {
  //   return fetch(file)
  //     .then(response => response.json())
  //     .catch(error => console.log(error));
  // };
  
  // const sendData = (url,data) => {
  //   return fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     }
  //     }).then(response => response.json());
  // };
  
  // sendData(dataBaseUrl,getData(user))
  //   .then(data => console.log(data));
    
