
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logout, setConnexion, isConnected } from '../../services/user';
import { API_URL } from '../../Config';
import { useHistory, Link, NavLink } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Account(props) {
  var [isAuth, setAuth] = useState('load');
  var [userData, setUserData] = useState(null);
  const history = useHistory();

  const close = (event) => {
    logout();
  }
  
  const account = props.account ?? {};

  return (<>
    <div class="logout-panel">
      <input type="button" value="Logout" onClick={close}/>
    </div>
    <form class="formulaire">
      <div>
        <label>Prenom</label>
        <input type="text" value={account.firstname} />
      </div>
      <div>
        <label for="">Nom</label>
        <input type="text" value={account.lastname} />
      </div>
      <div>
        <label>Date de naissance</label>
        <input type="text" value={account.birthday} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={account.email} disabled/>
      </div>
      <div>
        <label>Login</label>
        <input type="text" value={account.login} disabled/>
      </div>
      <div>
        <input type="submit" value="Sauvegarder" />
      </div>
      <br/>
      <br/>
      {/* {
        Object.entries(all).map(e => 
            <>
              <FontAwesomeIcon title={e[0]} icon={all[e[0]]} className="burger" style={{
                marginRight: "10px",
                marginBottom: "10px",
                fontSize: '20px'
              }}/>
              {e[0]}
            </>
          )
      } */}
    </form>
  </>)
}