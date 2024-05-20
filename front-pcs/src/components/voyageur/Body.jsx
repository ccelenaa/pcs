
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
  console.log({
    kamal: "kamal",
    props
  })

  return (<>
    <Route path='/login' render={(prps) => <Login {...props}/>}/>
    <Route path='/signup' render={(prps) => <Login {...props}/>}/>
    <Route path='/account' render={(prps) => <Account {...props}/>}/>
    <Route path='/security' render={(prps) => <Security {...props}/>}/>
    <Route path='/parameters' render={(prps) => <Parameters {...props}/>}/>
    <Route path='/memberships' render={(prps) => <MemberShips {...props}/>}/>
    <Route path='/payments' render={(prps) => <Payments {...props}/>}/>
    <Route path='/messages' render={(prps) => <Messages {...props}/>}/>
    <Route path='/account' render={(prps) => <Account {...props}/>}/>
  </>)
}