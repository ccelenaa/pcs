

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from '../../services/user';
import { API_URL } from '../../Config';
import { useHistory, Link, NavLink } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prestationService from '../../services/prestation';

export default function Prestations(props) {

  const [prestations, setPrestations] = React.useState([]);

  const getPrestations = () => {
    prestationService.gets().then((brs) => {
      if (brs.status === 200) {
        setPrestations(brs.data);
      }
    })
  }

  React.useEffect(() => {
    getPrestations();
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
      prestations.map(p => console.log(p.id, p.suspended_at));
    });
  }

  return (<>
    <div className="tab-container">
      <div className="row header">
        <div className="cell slim120">Type</div>
        <div className="cell slim70">Surface</div>
        <div className="cell">prestation</div>
        <div className="cell slim70">Prix</div>
        <div className="cell slim50">B-Sus</div>
        <div className="cell slim">Sus</div>
        <div className="cell slim">Val</div>
      </div>
      {
        prestations.map((prestation) => 
          <>
            <div className="row">
              <div className="cell slim120">{prestation.type}</div>
              <div className="cell slim70">{prestation.area}</div>
              <div className="cell">{prestation.description}</div>
              <div className="cell slim70">{prestation.price} {prestation.currency}</div>
              <div className="cell slim50"><input id={`${prestation.id}_b_val`} data-prestationid={prestation.id} type="checkbox" defaultChecked={prestation.bailleur_suspended_at !== null} title={prestation.bailleur_suspended_at?.slice(0, 16).replace('T', ' ')} disabled/></div>
              <div className="cell slim"><input id={`${prestation.id}_val`} data-prestationid={prestation.id} type="checkbox" defaultChecked={prestation.suspended_at !== null} onChange={suspenssion} title={prestation.suspended_at?.slice(0, 16).replace('T', ' ')} style={{display: prestation.validated_at === null ? "none" : "initial"}}/></div>
              <div className="cell slim"><input id={`${prestation.id}_sus`} data-prestationid={prestation.id} type="checkbox" defaultChecked={prestation.validated_at !== null} onChange={validation} title={prestation.validated_at?.slice(0, 16).replace('T', ' ')} disabled={prestation.validated_at !== null}/></div>
              {/* <div className="cell slim"><FontAwesomeIcon icon={all.faRemove} className="burger" style={{fontSize: '18px', cursor: 'pointer'}}/></div> */}
            </div>
          </>
        )
      }
    </div>
  </>)
}