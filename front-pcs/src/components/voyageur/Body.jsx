
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from './../../services/user';
import { API_URL } from './../../Config';
import { useHistory, Link, NavLink, Route, useLocation } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import Security from './Security';
import Parameters from './Parameters';
import MemberShips from './MemberShips';
import Payments from './Payments';
import Account from './Account';
import Messages from './Messages';
import Login from 'components/login/Login';

export default function Body(props) {
  return (<>
    <Route path='/auth' render={(prps) => <Login {...props}/>}/>
    <Route path='/inscription' render={(prps) => <Login {...props}/>}/>
    <Route path='/compte' render={(prps) => <Account {...props}/>}/>
    <Route path='/biens' render={(prps) => <Security {...props}/>}/>
    <Route path='/locations' render={(prps) => <Parameters {...props}/>}/>
    <Route path='/prestations' render={(prps) => <MemberShips {...props}/>}/>
    <Route path='/factures' render={(prps) => <Payments {...props}/>}/>
  </>)
}