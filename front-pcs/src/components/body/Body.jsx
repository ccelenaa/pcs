import React from 'react';

import {BrowserRouter as Router,Route, useLocation, onEnter, Redirect} from 'react-router-dom';
import Webmaster from '../website/Webmaster';
import Login from '../login/Login';
import Checkout from '../../services/payment/checkout';
import Pot from '../pot/Pot';
import Home from '../home/Home';
import Settings from 'components/settings/Settings';
const background = '/public/images/flowers.jpg';


export default function Body(bodyProps) {

    return(
        // <div className='body' style={{backgroundImage: `url(${background})`, backgroundSize: '30%'}}>
            <div className='body-container'>
                <div className='body-content'>
                    <Route path='/' exact render={(props) => <Home {...bodyProps}/>}/>
                    <Route path='/settings/:menu'  render={(props) => <Settings {...bodyProps}/>}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/pot/:wallet' exact render={(props) => <Pot {...bodyProps} key={Date.now()}/>}/>
                    <Route path='/checkout/:pot/:amount' exact component={Checkout}/>
                    <Route path='/webmaster' exact render={(props) => <Webmaster {...bodyProps}/>}/>
                </div>
            </div>
    )
}