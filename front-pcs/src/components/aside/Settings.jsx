
import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Route, useParams, NavLink } from 'react-router-dom';
import {
  faUniversity,
  faDove,
  faUser,
  faLocationDot,
  faBirthdayCake,
  faAddressBook,
  faAddressCard,
  faKeyboard,
  faKey,
  faFileWord,
  faFlag,
  faClockRotateLeft,
  faClockFour,
  faClock,
  faContactBook,
  faContactCard,
  faPenAlt,
  faUnlockKeyhole,
  faFaceFrownOpen,
  faFaceFrown,
  faArrowLeftLong,
  faArrowRightLong,
  faPhoneAlt,
  faPhone,
  faPhoneSquare,
  faPhoneFlip,
  faPhoneVolume,
  faChevronRight,
  faUsersRectangle,faHandshakeAngle,faUserFriends,faUserGroup,faFolderClosed,faShieldAlt,faPen,faCreditCard,faHaykal
} from '@fortawesome/free-solid-svg-icons';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AsideSetting(props) {
  const {menu: selected} = useParams();
  
  useEffect(() => {

  },[]);

  let menus = [];
  if(props.isAuth !== 'true'){
    menus = [
      {
        menu: 'login',
        label: 'Signin',
        icon: faUnlockKeyhole
      },
      {
        menu: 'signup',
        label: 'Signup',
        icon: faUsersRectangle
      }
    ];
  } else {
    switch(props.organization.name){
      case "admin":
        menus = [
          {
            menu: 'profile',
            label: 'Profile',
            icon: faUser
          },{
            menu: 'bailleurs',
            label: 'Gestion bailleurs',
            icon: faUserFriends
          },{
            menu: 'prestataires',
            label: 'Gestion prestataires',
            icon: faUserGroup
          },{
            menu: 'voyageurs',
            label: 'Gestion voyageurs',
            icon: faUserGroup
          },{
            menu: 'voyageurs1',
            label: 'Gestion des Biens',
            icon: faUserGroup
          },{
            menu: 'prestations',
            label: 'Gestion des prestations',
            icon: faUserGroup
          },{
            menu: 'security',
            label: 'Sécurité',
            icon: faShieldAlt
          },{
            menu: 'parameters',
            label: 'Parametres',
            icon: all.faCog
          },{
            menu: 'account',
            label: 'Compte',
            icon: faFolderClosed
          },
        ]; break;
      case "bailleur":
        menus = [
          {
            menu: 'profile',
            label: 'Profile',
            icon: faUser
          },
          {
            menu: 'security',
            label: 'Mes biens',
            icon: faShieldAlt
          },{
            menu: 'parameters',
            label: 'Parametres',
            icon: all.faCog
          },{
            menu: 'account',
            label: 'Compte',
            icon: faFolderClosed
          },
        ]; break;
      case "prestataire":
        menus = [
          {
            menu: 'profile',
            label: 'Profile',
            icon: faUser
          },{
            menu: 'memberships',
            label: 'Mes prestations',
            icon: faHandshakeAngle
          },
          {
            menu: 'security',
            label: 'Mes factures',
            icon: faShieldAlt
          },{
            menu: 'parameters',
            label: 'Parametres',
            icon: all.faCog
          },{
            menu: 'account',
            label: 'Compte',
            icon: faFolderClosed
          },
        ]; break;
      case "voyageur":
        menus = [
          {
            menu: 'profile',
            label: 'Profile',
            icon: faUser
          },{
            menu: 'parameters',
            label: 'Biens disponibles',
            icon: all.faCog
          },{
            menu: 'security',
            label: 'Mes reservations',
            icon: faShieldAlt
          },{
            menu: 'memberships',
            label: 'Demande de prestations',
            icon: faHandshakeAngle
          },{
            menu: 'account',
            label: 'Mes factures',
            icon: faFolderClosed
          },
        ];
    }
  }

  return (
    <>
      <div className="left-block" style={{ flexShrink: 0, flexBasis: '400px', backgroundColor: '#F5F7FF', position: 'relative', fontSize: '16px'}}>
        <div style={{ position: 'sticky', top: '44px', padding: '30px 0px', margin: '0 auto', maxWidth: '600px' }}>
          <div class="presentation">
            <ul>
              {
                menus.map((m) => {
                  return (
                    <li>
                      <NavLink to={`/settings/${m.menu}`} className={selected===m.menu ? 'selectedd': ''} style={{display: 'flex'}}>
                        <div style={{flexShrink: '0', flexGrow: '0', height: '12px', width: '25px', textAlign: 'center', paddingRight: '8px'}}>
                          <FontAwesomeIcon icon={m.icon} className="burger" style={{}}/>
                        </div>
                        <div style={{flexShrink: '1', flexGrow: '1'}}>{m.label}</div>
                        {
                          selected===m.menu
                          ? <div style={{
                            height: '12px', flexShrink: '0', flexGrow: '0'
                            }}><FontAwesomeIcon icon={all['faAngleRight']} className="burger" style={{
                              marginTop: "1px"
                            }}/></div>
                          : <></>
                        }
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}