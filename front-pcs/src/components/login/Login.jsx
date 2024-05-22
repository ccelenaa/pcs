
import React, {useState} from 'react';
import axios from 'axios';
import { API_URL } from './../../Config';
import { isConnected, setConnexion } from 'services/user';
import { useHistory, Link, NavLink, Route, useLocation } from 'react-router-dom';

export default function Login(props) {
  const history = useHistory();
  console.log({props})
  var [isAuth, setAuth] = useState('load');
  var [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    service: props.organization.name
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const form = event.target;

    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', `${API_URL}/auth/signin`, true);
    
    // xhr.onload = () => {
    //   console.log('GOOD');
    // };
    // xhr.withCredentials = true;
    // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    // var auth = new FormData();
    // auth.append('login', 'Celina');
    // auth.append('password', 'Celina');
    // console.log(auth);
    // xhr.send(auth);

  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    axios({
      method: 'post',
      url: `${API_URL}/auth/signin`,
      responseType: 'json',
      data: formData,
      withCredentials: true
    }).then(function (response) {
      if (200 <= response.status < 400) {
        isConnected(null).then((res) => {
          if (200 <= res.status < 400) {
            window.location.assign("/");
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
  };

  return (
    <>
    <br/>
    <br/>
          <form class="formulaire" onSubmit={handleSubmit}>
            <div>
              <input type="text" name="login" onChange={handleChange} placeholder="Login"/>
            </div>
            <div>
              <input type="password" name="password" onChange={handleChange} placeholder="Password"/>
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
    </>
  )
}