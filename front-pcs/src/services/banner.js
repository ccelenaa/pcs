import axios from 'axios';
import { API_URL } from '../Config';

export function getBanner (event) {
    return axios({
        method: 'get',
        url: `${API_URL}/banner`,
        responseType: 'json',
        withCredentials: true
    }).then(function (response) {
        return response;
    });
}