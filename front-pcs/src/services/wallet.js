import axios from 'axios';
import { API_URL } from '../Config';

export function getWallet (wallet) {
    return axios({
        method: 'get',
        url: `${API_URL}/wallets/${wallet}`,
        responseType: 'json',
        withCredentials: true
    }).then(function (response) {
        return response;
    });
}
