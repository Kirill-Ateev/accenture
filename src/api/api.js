import * as axios from "axios";
import { API_URL } from "../constants/constantValues";
import fetchJSON from '../functions/fetchJSON';
import { getCookie } from '../functions/manageCookie';



export default class Api {
  static async fetch(method, endpoint, options = {}) {
    try {
      let { headers, isForm, data, notApiUrl, locale,  ...opts } = options;
      let defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
      let body;

      if (locale) defaultHeaders["Accept-Language"] = locale;

      if (method === 'post' || method === 'put' || method === 'delete' || method === 'get') {
        const isFormData = data instanceof FormData;
        const isJSON = data instanceof Object && data.constructor === Object;

        if (isJSON) {
          body = JSON.stringify(data);
        }

        if (isFormData) {
          body = data;
          defaultHeaders = {};
        }

        // defaultHeaders['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      }

      let url = notApiUrl ? endpoint : `${API_URL}/${endpoint}`;

      let json = await fetchJSON(url, {
        credentials: 'same-origin',
        headers: {
          ...defaultHeaders,
         // ...getAuthorizationHeaders(),
          ...headers
        },
        method,
        body,
        ...opts
      });

      console.log(json)

      return json;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async get(endpoint, options) {
    return await Api.fetch('get', endpoint, options);
  }

  static async post(endpoint, options) {
    return await Api.fetch('post', endpoint, options);
  }

  static async put(endpoint, options) {
    return await Api.fetch('put', endpoint, options);
  }

  static async delete(endpoint, options) {
    return await Api.fetch('delete', endpoint, options);
  }

  static createXHR(method, endpoint, options) {
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), `${API_URL}/${endpoint}`, true);
    //const authHeaders = getAuthorizationHeaders();
    xhr.withCredentials = true;
    // for (let key in authHeaders) {
    //   xhr.setRequestHeader(key, authHeaders[key]);
    // }
    return xhr;
  }
}
