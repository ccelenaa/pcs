

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from '../../services/user';
import { API_URL } from '../../Config';
import { useHistory, Link, NavLink } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prestationService from '../../services/prestation';
import prestataireService from '../../services/prestataire';
import typePrestationService from '../../services/service';

export default function Prestations(props) {

  const [prestations, setPrestations] = React.useState([]);
  const [typePrestations, setTypePrestations] = React.useState([]);
  const [prestataires, setPrestataires] = React.useState([]);

  const getPrestataires= () => {
    prestataireService.gets().then((brs) => {
      if (brs.status === 200) {
        setPrestataires(brs.data);
      }
    })
  }

  const getTypePrestations = () => {
    typePrestationService.gets().then((brs) => {
      if (brs.status === 200) {
        setTypePrestations(brs.data);
      }
    })
  }

  const getPrestations = () => {
    prestationService.gets().then((brs) => {
      if (brs.status === 200) {
        setPrestations(brs.data);
      }
    })
  }

  React.useEffect(() => {
    getPrestations();
    getPrestataires();
    getTypePrestations();
  },[]);

  const validation = (event) => {
    const prestation_id = event.target.getAttribute('data-prestationid');
    const valider = event.target.checked;
    prestationService.valider(prestation_id, valider).then(({data: u}) => {
      setPrestations(prestations.map(b => b.id == u.id ? u : b));
      prestations.map(b => console.log(b.id, b.verified_at));
    });
  }
  
  const suspenssion = (event) => {
    const prestation_id = event.target.getAttribute('data-prestationid');
    const suspendre = event.target.checked;
    prestationService.suspendre(prestation_id, suspendre).then(({data: u}) => {
      setPrestations(prestations.map(p => p.id == u.id ? u : p));
      prestations.map(p => console.log(p.id, p.date_suspension));
    });
  }

  return (<>
    <div className="tab-container">
      <div className="row header">
        <div className="cell">Voyageur</div>
        <div className="cell">Prestation</div>
        <div className="cell">Date</div>
        <div className="cell">Prestataire dispo</div>
      </div>
      {
        prestations.map((prestation) => 
          <>
            <div className="row">
              <div className="cell">{prestation.voyageur.nom}</div>
              <div className="cell">{prestation.service.label}</div>
              <div className="cell">{prestation.date_prestation?.slice(0, 16).replace('T', ' ')}</div>
              <div className="cell">
                <select>
                  <option key="null" value="null">
                    Selection du prestataire
                  </option>
                  {prestataires.map(({ id, nom }) => (
                    <option key={id} value={id}>
                      {nom}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )
      }
    </div>
  </>)
}