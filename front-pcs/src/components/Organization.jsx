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
    organization: {
      name: url ? url[1] : 'Undefine',
      data: {},
      menu: [
        {
            category: "main",
            created_at: "2022-11-09T15:21:15.150Z",
            created_by: null,
            data: {},
            deleted_at: null,
            id: "db4e597f-c64d-4cda-af78-02fd44400020",
            options: {},
            organization_id: "db4e597f-c64d-4cda-af78-02fd44400002",
            parent_id: null,
            position: 0,
            sub_menus: [],
            target: {
                url: "https://pcs.fr"
            },
            title: "Accueil PCS",
            type: "LINK",
            updated_at: "2022-12-18T15:36:05.920Z"
        },
        {
            category: "main",
            created_at: "2022-11-09T15:21:15.150Z",
            created_by: null,
            data: {},
            deleted_at: null,
            id: "db4e597f-c64d-4cda-af78-02fd44400020",
            options: {},
            organization_id: "db4e597f-c64d-4cda-af78-02fd44400002",
            parent_id: null,
            position: 1,
            sub_menus: [],
            target: {
                url: "https://admin.pcs.fr"
            },
            title: "Administration PCS",
            type: "LINK",
            updated_at: "2022-12-18T15:36:05.920Z"
        },
        {
            category: "main",
            created_at: "2022-11-09T15:21:15.150Z",
            created_by: null,
            data: {},
            deleted_at: null,
            id: "db4e597f-c64d-4cda-af78-02fd44400020",
            options: {},
            organization_id: "db4e597f-c64d-4cda-af78-02fd44400002",
            parent_id: null,
            position: 2,
            sub_menus: [],
            target: {
                url: "https://bailleur.pcs.fr"
            },
            title: "Espace bailleurs",
            type: "LINK",
            updated_at: "2022-12-18T15:36:05.920Z"
        },
        {
            category: "main",
            created_at: "2022-11-09T15:21:15.150Z",
            created_by: null,
            data: {},
            deleted_at: null,
            id: "db4e597f-c64d-4cda-af78-02fd44400020",
            options: {},
            organization_id: "db4e597f-c64d-4cda-af78-02fd44400002",
            parent_id: null,
            position: 3,
            sub_menus: [],
            target: {
                url: "https://prestataire.pcs.fr"
            },
            title: "Espace prestataires",
            type: "LINK",
            updated_at: "2022-12-18T15:36:05.920Z"
        },
        {
            category: "main",
            created_at: "2022-11-09T15:21:15.150Z",
            created_by: null,
            data: {},
            deleted_at: null,
            id: "db4e597f-c64d-4cda-af78-02fd44400020",
            options: {},
            organization_id: "db4e597f-c64d-4cda-af78-02fd44400002",
            parent_id: null,
            position: 4,
            sub_menus: [],
            target: {
                url: "https://prestataire.pcs.fr"
            },
            title: "Espace voyageurs",
            type: "LINK",
            updated_at: "2022-12-18T15:36:05.920Z"
        }
      ]
    },
    status: 'pending_'
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

    setUser(await getUserData());

    // try {
    //   const org = await getOrganization();
    //   if (org) {
    //     setOrganization({
    //       name:   org.name,
    //       organization: org,
    //       status: 'valid'
    //     });

    //     document.title = org.name;
    //   }
    // } catch (error) {
    //   setOrganization({
    //     name:   organization.name,
    //     status: 'unvalid'
    //   });
    // }
  }, []);

  return organization.status === 'pending' ? (<></>) :
  organization.status === '1unvalid' ?
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
