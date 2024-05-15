import axios from 'axios';
import { API_URL } from '../Config';

export function getMenu (event) {
    return axios({
        method: 'get',
        url: `${API_URL}/menu`,
        responseType: 'json',
        withCredentials: true
    }).then(function (response) {
        return response;
    });
}
