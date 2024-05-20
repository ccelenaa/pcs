import axios from 'axios';
import { API_URL } from '../Config';

export default {
    getBailleurs: (event) => {
        return axios({
            method: 'get',
            url: `${API_URL}/bailleurs`,
            responseType: 'json',
            withCredentials: true,
        }).catch(function (error) {
            console.log({error})
            return null;
        });
    }
}
