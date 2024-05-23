

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from '../../services/user';
import { API_URL } from '../../Config';
import { useHistory, Link, NavLink } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prestataireService from '../../services/prestataire';
import bienService from '../../services/bien';

export default function Prestataires(props) {

  const [prestataires, setPrestataires] = React.useState([]);

  const getPrestataires = () => {
    prestataireService.gets().then((brs) => {
      if (brs.status === 200) {
        console.log({data:brs.data});
        setPrestataires(brs.data);
      }
    })
  }

  React.useEffect(() => {
    getPrestataires();
  },[]);

  const validation = (event) => {
    const prestataire_id = event.target.getAttribute('data-prestataireid');
    const valider = event.target.checked;
    prestataireService.valider(prestataire_id, valider).then(({data: u}) => {
      setPrestataires(prestataires.map(b => b.id == u.id ? u : b));
      prestataires.map(b => console.log(b.id, b.verified_at));
    });
  }
  
  const suspenssion = (event) => {
    const prestataire_id = event.target.getAttribute('data-prestataireid');
    const suspendre = event.target.checked;
    prestataireService.suspendre(prestataire_id, suspendre).then(({data: u}) => {
      setPrestataires(prestataires.map(p => p.id == u.id ? u : p));
      prestataires.map(p => console.log(p.id, p.suspended_at));
    });
  }

  return (<>
    <div className="tab-container">
      <div className="row header">
        <div className="cell">Pretstatire</div>
        <div className="cell">Créer</div>
        {/* <div className="cell slim40">Biens</div> */}
        <div className="cell slim">Susp</div>
        <div className="cell slim">Val</div>
        {/* <div className="cell slim"></div> */}
      </div>
      {
        prestataires.map((prestataire) => 
          <>
            <div className="row">
              <div className="cell">{prestataire.name}</div>
              <div className="cell">{prestataire.created_at.slice(0, 16).replace('T', ' ')}</div>
              {/* <div className="cell slim40">{prestataire.bien.length}</div> */}
              <div className="cell slim"><input id={`${prestataire.id}_val`} data-prestataireid={prestataire.id} type="checkbox" defaultChecked={prestataire.suspended_at !== null} onChange={suspenssion} title={prestataire.suspended_at?.slice(0, 16).replace('T', ' ')} style={{display: prestataire.verified_at === null ? "none" : "initial"}}/></div>
              <div className="cell slim"><input id={`${prestataire.id}_sus`} data-prestataireid={prestataire.id} type="checkbox" defaultChecked={prestataire.verified_at !== null} onChange={validation} title={prestataire.verified_at?.slice(0, 16).replace('T', ' ')} disabled={prestataire.verified_at !== null}/></div>
              {/* <div className="cell slim"><FontAwesomeIcon icon={all.faRemove} className="burger" style={{fontSize: '18px', cursor: 'pointer'}}/></div> */}
            </div>
          </>
        )
      }
    </div>
  </>)
}