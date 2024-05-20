import axios from 'axios';
import { API_URL } from '../Config';

export default {
    getBiens: (event) => {
        return axios({
            method: 'get',
            url: `${API_URL}/biens`,
            responseType: 'json',
            withCredentials: true,
        }).then(function (response) {
            return response.data;
        });
    }
}
