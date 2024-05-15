
import React from 'react';
import Utils from './utils';

import { useParams } from 'react-router-dom';

export default function Checkout(props) {
  const {pot, amount} = useParams();

  React.useEffect(() => {
    Utils.checkout(pot, amount);
  },[]);

  return (<></>);
}