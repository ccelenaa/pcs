
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logout, setConnexion, isConnected } from '../../services/user';
import { API_URL } from '../../Config';
import { useHistory, Link, NavLink } from 'react-router-dom';
import AsideSetting from '../aside/Settings';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

export default function Langues(props) {
  const { i18n, t } = useTranslation();

  return (<>

  </>)
}