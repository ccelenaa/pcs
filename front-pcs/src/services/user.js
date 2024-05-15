import axios from 'axios';
import { API_URL } from '../Config';

export function setConnexion (connected) {
    var [html] = document.getElementsByTagName('html');

    if (connected) {
        html.classList.add('connected');
    } else {
        html.classList.remove('connected');
    }
}

function getUser (event) {
    return axios({
        method: 'get',
        url: `${API_URL}/accounts/me`,
        responseType: 'json',
        withCredentials: true
    });
}

export function isConnected (event) {
    return getUser(event);
}

export function getUserData (event) {
    return getUser(event)
    .then(response => response.data)
    .catch(err => undefined);
}

export function logout (event) {
    return axios({
      method: 'post',
      url: `${API_URL}/auth/signout`,
      responseType: 'json',
      withCredentials: true
    }).then(function (response) {
        window.location.reload(true);
      }).catch(console.log);
  }