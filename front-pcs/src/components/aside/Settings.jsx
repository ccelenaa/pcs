
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
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

export default function AsideSetting(props) {
  // const {menu: selected} = useParams();
  const {pathname: selected = ""} = useLocation();

  useEffect(() => {

  },[]);

  let menus = [];
  if(props.isAuth !== 'true'){
    menus = [
      {
        menu: '/auth',
        label: 'Authetification',
        icon: faUnlockKeyhole
      },
      {
        menu: '/inscription',
        label: 'Inscription',
        icon: all.faAdd
      }
    ];
  } else {
    switch(props.organization.name){
      case "admin":
        menus = [
          {
            menu: '/compte',
            label: 'Compte',
            icon: faUser
          },{
            menu: '/messages',
            label: 'Messages',
            icon: all.faComment
          },{
            menu: '/biens',
            label: 'Gestion des biens',
            icon: all.faHomeLg
          },{
            menu: '/prestations',
            label: 'Gestion des prestations',
            icon: all.faHandshakeAngle
          },{
            menu: '/bailleurs',
            label: 'Gestion des bailleurs',
            icon: faUserFriends
          },{
            menu: '/prestataires',
            label: 'Gestion des prestataires',
            icon: faUserGroup
          },{
            menu: '/voyageurs',
            label: 'Gestion des voyageurs',
            icon: faUserGroup
          },{
            menu: '/langues',
            label: 'Langues',
            icon: faUserGroup
          },
        ]; break;
      case "bailleur":
        menus = [
          {
            menu: '/compte',
            label: 'Compte',
            icon: faUser
          },{
            menu: '/messages',
            label: 'Messages',
            icon: all.faComment
          },{
            menu: '/biens',
            label: 'Mes biens',
            icon: all.faHomeLg
          },{
            menu: '/prestations',
            label: 'Prestations',
            icon: all.faAdd
          },{
            menu: '/factures',
            label: 'Mes factures',
            icon: all.faCreditCard
          },
        ]; break;
      case "prestataire":
        menus = [
          {
            menu: '/compte',
            label: 'Compte',
            icon: faUser
          },{
            menu: '/messages',
            label: 'Messages',
            icon: all.faComment
          },{
            menu: '/prestations',
            label: 'Mes prestations',
            icon: faHandshakeAngle
          },{
            menu: '/planing',
            label: 'Mes disponibilités',
            icon: faFolderClosed
          },{
            menu: '/factures',
            label: 'Mes factures',
            icon: faCreditCard
          },
        ]; break;
      case "voyageur":
        menus = [
          {
            menu: '/compte',
            label: 'Compte',
            icon: faUser
          },{
            menu: '/biens',
            label: 'Biens disponibles',
            icon: all.faCog
          },{
            menu: '/locations',
            label: 'Mes locations',
            icon: faShieldAlt
          },{
            menu: '/prestations',
            label: 'Demande de prestations',
            icon: faHandshakeAngle
          },{
            menu: '/factures',
            label: 'Mes factures',
            icon: faCreditCard
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
                      <NavLink to={m.menu} className={selected.startsWith(m.menu) ? 'selectedd': ''} style={{display: 'flex'}}>
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