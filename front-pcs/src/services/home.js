import axios from 'axios';
import { API_URL } from '../Config';

export function getHome (event) {
    return axios({
        method: 'get',
        url: `${API_URL}/pages/b4e597fd-c64d-4cda-af78-97fdb4e50004`,
        responseType: 'json',
        withCredentials: true
    }).then(function (response) {
        return response;
    });
}
