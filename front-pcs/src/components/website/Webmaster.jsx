
import React, { useState } from 'react';
import AsideCommon from '../aside/Common';
import ModalImage from '../commun/ModalImage';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


export default function Webmaster(props) {
  const [isOpen, setModalOpen] = useState(false);
  return (
    <>
      <ModalImage isOpen={isOpen} url={'/static/media/village5.17e7675e.jpg'} close={() => setModalOpen(false)}></ModalImage>
      <div class="body-content-inner">
        <AsideCommon {...props}/>
        <div class="main-container">
          <div class="main-content">
            <div style={{ textAlign: 'justify' }}>
              <h3 style={{ textAlign: 'center' }}>Web master</h3>
              <p>
                L’ensemble de l’équipe dirigeante de l’association "Les Enfants
                d’Ihaggarene" tient particulièrement à saluer l’implication exceptionnelle de
                Kamal Mehdi dans la conception et la construction de notre site internet.
                Encore merci pour son engagement sans limite.
              </p>
              <p>
                PS: Nous profitons de l’occasion pour appeler toutes personnes ayant des compétences en informatique,
                souhaitant nous aider à développer et faire vivre notre site, à se faire connaitre au plus vite via l’adresse
                mail suivante: <b>lesenfantsdihaggarene.2020@gmail.com</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}