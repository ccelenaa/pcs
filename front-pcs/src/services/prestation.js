import axios from 'axios';
import { API_URL } from '../Config';
import {notifier} from '../components/Notifications';

export default {
    gets: () => {
        return axios({
            method: 'get',
            url: `${API_URL}/prestations?cache=${Math.random()}`,
            responseType: 'json',
            withCredentials: true,
        }).then((response) => response.status === 200 ? response.data : [])
        .catch(function (error) {
            console.log({error});
            return [];
        });
    },

    parVoyageur: (id_voyageur) => {
        return axios({
            method: 'get',
            url: `${API_URL}/prestations/voyageur/${id_voyageur}?cache=${Math.random()}`,
            responseType: 'json',
            withCredentials: true,
        }).then((response) => response.status === 200 ? response.data : [])
        .catch(function (error) {
            console.log({error});
            return [];
        });
    },

    get: (id) => {
        return axios({
            method: 'get',
            url: `${API_URL}/prestations/${id}`,
            responseType: 'json',
            withCredentials: true,
        }).then((response) => response.status === 200 ? response.data : {})
        .catch(function (error) {
            console.log({error})
            return null;
        });
    },

    setPrestataire: (id, id_prestataire) => {
        return axios({
            method: 'post',
            url: `${API_URL}/prestations/${id}/set/prestataire`,
            responseType: 'json',
            withCredentials: true,
            data: {
                id_prestataire
            }
        }).then((response) => response.status === 200 ? response.data : {})
        .catch(function (error) {
            console.log({error})
            return null;
        });
    },

    setNote: (id,note) => {
        return axios({
            method: 'post',
            url: `${API_URL}/prestations/${id}/set/note`,
            responseType: 'json',
            withCredentials: true,
            data: {
                note
            }
        }).then((response) => {
            if(response.status === 200) {
                const prestation = response.data;
                notifier('note', `+${prestation.note} pour ${prestation.prestataire.nom}`);
                return prestation;
            }
            return {};
        }).catch(function (error) {
            console.log({error})
            return null;
        });
    },

}
