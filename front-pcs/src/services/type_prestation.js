import axios from 'axios';
import { API_URL } from '../Config';

export default {
    gets: (event) => {
        return axios({
            method: 'get',
            url: `${API_URL}/prestations?cache=${Math.random()}`,
            responseType: 'json',
            withCredentials: true,
        }).catch(function (error) {
            console.log({error});
            return [];
        });
    },

    get: (id) => {
        return axios({
            method: 'post',
            url: `${API_URL}/prestations/${id}?cache=${Math.random()}`,
            responseType: 'json',
            withCredentials: true,
        }).catch(function (error) {
            console.log({error})
            return null;
        });
    },
}
