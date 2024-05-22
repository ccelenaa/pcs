// import React from 'react';

// import {BrowserRouter as Router,Route, useLocation, onEnter, Redirect} from 'react-router-dom';
// import Webmaster from '../website/Webmaster';
// import Login from '../login/Login';
// import Checkout from '../../services/payment/checkout';
// import Pot from '../pot/Pot';
// import Home from '../home/Home';
// import Settings from 'components/settings/Settings';
// const background = '/public/images/flowers.jpg';


// export default function Body(bodyProps) {

//     return(
//         // <div className='body' style={{backgroundImage: `url(${background})`, backgroundSize: '30%'}}>
//             <div className='body-container'>
//                 <div className='body-content'>
//                     <Route path='/' exact render={(props) => <Home {...bodyProps}/>}/>
//                     <Route path='/settings/:menu' render={(props) => <Settings {...bodyProps}/>}/>
//                     <Route path='/login' exact render={(props) => <Login {...bodyProps}/>}/>
//                     <Route path='/pot/:wallet' exact render={(props) => <Pot {...bodyProps} key={Date.now()}/>}/>
//                     <Route path='/checkout/:pot/:amount' exact component={Checkout}/>
//                     <Route path='/webmaster' exact render={(props) => <Webmaster {...bodyProps}/>}/>
//                 </div>
//             </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setConnexion, isConnected } from './../../services/user';
import { API_URL } from './../../Config';
import { useHistory, Link, NavLink, Route, useLocation } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import { Redirect, useParams } from 'react-router-dom/cjs/react-router-dom';
import AsideSSetting from 'components/aside/SSettings';
import Voyageur from 'components/voyageur/Body';
import Bailleur from 'components/bailleur/Body';
import Prestataire from 'components/prestataire/Body';
import Admin from 'components/admin/Body';

export default function Settings(props) {

  var [isAuth, setAuth] = useState('load');
  var [userData, setUserData] = useState(null);
  const history = useHistory();
  // const {menu: selected} = useParams();
  const {pathname: selected = ""} = useLocation();

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

  if(isAuth === 'false' && selected !== '/auth' && selected !== '/inscription') {
    return <Redirect to="/auth"/>;
  }

  if(isAuth === 'true' && (selected === '/auth' || selected === '/inscription' || selected === '/')) {
    return <Redirect to="/compte"/>;
  }

  return (<>
      <div className='body-container'>
          <div className='body-content'>
            { ['true','false'].includes(isAuth) ?
              <>
                <div class="body-content-inner" onClick={back}>
                    <AsideSetting {...props} isAuth={isAuth}/>
                    <div class="main-container">
                        {/* <AsideSSetting></AsideSSetting> */}
                        <div class="main-content">
                        {
                          props.organization.name == 'admin' ? <Admin {...props}/> :
                          (props.organization.name == 'voyageur' ? <Voyageur {...props}/> :
                            (props.organization.name == 'prestataire' ? <Prestataire {...props}/> :
                              (props.organization.name == 'bailleur' ? <Bailleur {...props}/> : <></>)
                            )
                          )
                        }
                        </div>
                    </div>
                </div>
              </>: <></>
            }
          </div>
      </div>
  </>)
}