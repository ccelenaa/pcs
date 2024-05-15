import React, { CSSProperties } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const mystyle = {
    background: "#222222",
    display: "flex",
}
export default function Footer(){
   
    return(
        <div class="footer-container">
           <div className="footer-content">
                <div style={{flexGrow: 1}}>
                    Conditionne générales (reservé aux adhérents)<br/>
                </div>
                <div style={{flexGrow: 1}}>
                    <a href={'public/documents/reglement.pdf'} target="_blank">Reglement interieur</a><br/>
                </div>
                <div style={{flexGrow: 1}}>
                    <Link to="/webmaster" className="">Web master</Link>
                </div>
                <div>
                    Copyright enfants-ihaggarene 2020<br/>
                </div>
            </div>
        </div>
    )
}