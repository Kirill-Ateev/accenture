import Api from '../api/api';

export default function fetchJSON(url, options = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status === 401) {
          //TODO: add interceptor
          console.log(401, 'ERROR SERV');
          Api.post('refresh').then((x) => console.log(x));
          return;
        }

        const isJSON =
          response.headers.get('content-type').indexOf('application/json') !==
          -1;
        if (!isJSON) {
          reject({
            message: 'Not a JSON format',
            response,
            status: response.status,
            originalResponse: response,
          });
        }

        if (!response.ok) {
          return response.json().then((data) =>
            reject({
              message: 'Not OK',
              response: data,
              status: response.status,
              originalResponse: response,
            })
          );
        }

        response.json().then((data) => resolve(data));
      })
      .catch((error) => {
        reject(error);
      });
  });
}
