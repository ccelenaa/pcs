
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from './../../services/user';
import { API_URL } from './../../Config';
import { useHistory, Link, NavLink, Route, useLocation } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import Profile from './Profile';
import Security from './Security';
import Parameters from './Parameters';
import MemberShips from './MemberShips';
import Payments from './Payments';
import Account from './Account';
import Messages from './Messages';
import Login from 'components/login/Login';
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom';
import AsideSSetting from 'components/aside/SSettings';

export default function Settings(props) {
  console.log({
    kamal: "kamal",
    props
  })
  var [isAuth, setAuth] = useState('load');
  var [userData, setUserData] = useState(null);
  const history = useHistory();
  const {menu: selected} = useParams();

  useEffect(() => {
    document.getElementsByTagName('html')[0].scrollTop = 0;

    isConnected(null).then((response) => {
      if (response.status === 200) {
        setAuth('true');
        setUserData(response.data);
        document.getElementsByClassName('global')[0].classList.add('loaded');
      }
    }).catch((error) => {
      if (error.response?.status === 401) {
        setAuth('false');
        setUserData(null);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = {
      login: event.target.elements.login.value,
      password: event.target.elements.password.value
    };

    axios({
      method: 'post',
      url: `${API_URL}/auth/cookie`,
      responseType: 'json',
      data,
      withCredentials: true
    }).then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        isConnected(null).then((res) => {
          if (res.status === 200) {
            setConnexion(true);
            setAuth('true');
            setUserData(res.data);
            history.push("/");
          }
        })
      }
    }).catch((error) => {
      if (error.response.status === 401) {
        setConnexion(false);
        setAuth('false');
        setUserData(null);
      }
    });
  }



  const back = (event) => {
    var [html] = document.getElementsByTagName('html');
    html.classList.remove('settings-bloc-selected');
  }

  if(isAuth === 'false' && selected !== 'login') {
    return <Redirect to="/settings/login"/>;
  }

  if(isAuth === 'true' && selected === 'login') {
    return <Redirect to="/settings/profile"/>;
  }

  if(['true','false'].includes(isAuth)) {
    return (<>
      <div class="body-content-inner" onClick={back}>
        <AsideSetting {...props} isAuth={isAuth}/>
        <div class="main-container">
          <AsideSSetting></AsideSSetting>
          <div class="main-content">
            <Route path='/settings/login' render={(prps) => <Login {...props}/>}/>
            <Route path='/settings/profile' render={(prps) => <Profile {...props}/>}/>
            <Route path='/settings/security' render={(prps) => <Security {...props}/>}/>
            <Route path='/settings/parameters' render={(prps) => <Parameters {...props}/>}/>
            <Route path='/settings/memberships' render={(prps) => <MemberShips {...props}/>}/>
            <Route path='/settings/payments' render={(prps) => <Payments {...props}/>}/>
            <Route path='/settings/messages' render={(prps) => <Messages {...props}/>}/>
            <Route path='/settings/account' render={(prps) => <Account {...props}/>}/>
          </div>
        </div>
      </div>
    </>)
  } else {
    return <></>
  }
}