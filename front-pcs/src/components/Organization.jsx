import React, {useEffect, useState} from 'react';

import Menu   from './menu/Menu';
import Header from './header/Header';
import Body   from './body/Body';
import Footer from './footer/Footer';
import { timer, interval } from 'rxjs';

import {getOrganization} from '../services/organization';
import {getUserData} from '../services/user';
import { Since } from './../utils/date.ts'
import SettingsMenu from './menu/SettingsMenu';

function Organization() {
  var url = /^([a-zA-Z0-9-]+)\.([a-zA-Z0-9]+)\.([a-zA-Z]+)$/g.exec(window.location.hostname);
  
  var [organization, setOrganization] = useState({
    name:   url ? url[1] : 'Undefine',
    organization: {},
    status: 'pending'
  });  

  var [user, setUser] = useState({});
  
  useEffect(async () => {
    // timer(0, 3000).subscribe(n => {
    //   console.log('timer', n);
    // });
    interval(3000).subscribe(n => {
        var els = document.getElementsByClassName('createdAt');
        for (let el of els) {
          el.innerHTML = Since(new Date(el.dataset.date));
        }

        // if (html.classList.contains('burger-menu-opened')) {
        //   html.classList.remove('burger-menu-opened');
        // } else {
        //   html.classList.add('burger-menu-opened');
        // }

        // if (html.classList.contains('burger-menu-opened')) {
        //   html.classList.remove('burger-menu-opened');
        // } else {
        //   html.classList.add('burger-menu-opened');
        // }
    });

    try {
      setUser(await getUserData());
      const org = await getOrganization();
      if (org) {
        setOrganization({
          name:   org.name,
          organization: org,
          status: 'valid'
        });

        document.title = org.name;
      }
    } catch (error) {
      setOrganization({
        name:   organization.name,
        status: 'unvalid'
      });
    }
  }, []);

  return organization.status === 'pending' ? (<></>) :
  organization.status === 'unvalid' ?
  (
    <>
      <div style={{padding: '20px'}}>Organisation {organization.name} introuvable !!</div>
    </>
  ) :
  (
    <>
      <Menu menu={organization.organization.menu}/>
      {/* <SettingsMenu/> */}
      <Header organization={organization.organization}/>
      <Body organization={organization.organization} account={user}/>
      <Footer organization={organization.organization}/>
    </>
  );
}

export default Organization;
