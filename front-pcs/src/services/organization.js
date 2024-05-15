import axios from 'axios';
import { API_URL } from '../Config';

export function getOrganization (event) {
    return axios({
        method: 'get',
        url: `${API_URL}/organizations/current`,
        // url: `${config.get('protocol')}://${config.get('api')}/organization`,
        responseType: 'json',
        withCredentials: true,
    }).then(function (response) {
        return response.data;
    });
}
