
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as all from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <div id="notificationBox" className="notificationBox"></div>
  )
}

const pause = (event) => {
  notificationBox.classList.add('stopped')
}

const run = (event) => {
  notificationBox.classList.remove('stopped')
}

export function notifier(type, message) {
  let element = null;
  switch (type) {
    case 'success': element = <Success data={{ message }} />; break;
    case 'warning': element = <Warning data={{ message }} />; break;
    case 'error': element = <Error data={{ message }} />; break;
    case 'auth-error': element = <AuthError data={{ message }} />; break;
    default: element = <Information data={{ message }} />; break;
  }

  const notificationBox = document.getElementById('notificationBox');
  notificationBox.removeEventListener('mouseenter', pause);
  notificationBox.removeEventListener('mouseleave', run);

  const container = document.createElement('div');
  ReactDOM.render(element, container);
  const notification = container.firstChild;
  notificationBox.appendChild(notification);

  notificationBox.addEventListener('mouseenter', pause);
  notificationBox.addEventListener('mouseleave', run);

  notification.addEventListener('animationend', (event) => {
    if (event.animationName === 'consum') {
      notification.remove();
    }
  });
}

export const Information = (props) => {
  return (
    <div className='notification'>
      <FontAwesomeIcon icon={all.faInfoCircle} style={{ color: "green" }} />
      <div style={{ paddingLeft: "12px" }}>{props.data.message}</div>
    </div>
  )
}

export const Success = (props) => {
  return (
    <div className='notification'>
      <FontAwesomeIcon icon={all.faAnchorLock} style={{ color: "green" }} />
      <div style={{ paddingLeft: "12px" }}>{props.data.message}</div>
    </div>
  )
}

export const Warning = (props) => {
  return (
    <div className='notification'>
      <FontAwesomeIcon icon={all.faAnchorLock} style={{ color: "rgb(210, 40, 40)" }} />
      <div style={{ paddingLeft: "12px" }}>{props.data.message}</div>
    </div>
  )
}

export const Error = (props) => {
  return (
    <div className='notification'>
      <FontAwesomeIcon icon={all.faAnchorLock} style={{ color: "rgb(210, 40, 40)" }} />
      <div style={{ paddingLeft: "12px" }}>{props.data.message}</div>
    </div>
  )
}

export const AuthError = (props) => {
  return (
    <div className='notification error'>
      <FontAwesomeIcon icon={all.faLock} style={{ color: "rgb(236, 87, 0)" }} />
      <div style={{ paddingLeft: "12px" }}>{props.data.message}</div>
    </div>
  )
}