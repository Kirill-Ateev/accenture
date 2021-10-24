import { getCookie, setCookie, deleteCookie } from './manageCookie';

export function getToken() {
  return getCookie('token') || localStorage.getItem('token');
}

export function deleteToken() {
  if (!window) {
    return;
  }
  return setCookie('token', '', {
    // TODO: remove token in cookie at all
    path: '/',
    domain: '.' + window.location.host,
    expires: -1,
  });
}
