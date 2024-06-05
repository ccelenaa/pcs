
import React, { useEffect, useState } from 'react';
import Payment from 'services/payment';

export default function Paiements(props) {

  const [transctions, setTransctions] = React.useState([]);

  React.useEffect(async () => {
    setTransctions(await Payment.voyageurTransactions());
  },[]);

  const download = async (event) => {
    const response = await Payment.download_receipt(event.currentTarget.dataset.file);
    const blob = await response.blob(); // Convertit la réponse en un objet blob
    const url = URL.createObjectURL(blob); // Crée une URL pour le blob
    window.open(url, '_blank');
  }

  return (<>
    <div className="tab-container">
      <div className="row header">
        <div className="cell slim120">Type</div>
        <div className="cell slim70">Montant</div>
        <div className="cell slim40">PDF</div>
        <div className="cell slim40">Web</div>
        <div className="cell slim120">Date</div>
        {/* <div className="cell slim">Sus</div>
        <div className="cell slim">Val</div> */}
      </div>
      {
        transctions.map((transction) => 
          <>
            <div className="row">
              <div className="cell slim120">{transction.id_prestation ? 'prestation' : 'location'}</div>
              <div className="cell slim70">{(transction.amount/100).toFixed(2)} €</div>
              <div className="cell slim40 button" onClick={download} data-file={transction.data.receipt.pdf}>pdf</div>
              <div className="cell slim40"><a href={transction.data.receipt.web} target="_blank">lien</a></div>
              <div className="cell slim120">{transction.date_modification?.slice(0, 16).replace('T', ' ')}</div>
              {/* <div className="cell slim50"><input id={`${bien.id}_b_val`} data-bienid={bien.id} type="checkbox" defaultChecked={bien.bailleur_suspended_at !== null} title={bien.bailleur_suspended_at?.slice(0, 16).replace('T', ' ')} disabled/></div>
              <div className="cell slim"><input id={`${bien.id}_val`} data-bienid={bien.id} type="checkbox" defaultChecked={bien.suspended_at !== null} onChange={suspenssion} title={bien.suspended_at?.slice(0, 16).replace('T', ' ')} style={{display: bien.validated_at === null ? "none" : "initial"}}/></div>
              <div className="cell slim"><input id={`${bien.id}_sus`} data-bienid={bien.id} type="checkbox" defaultChecked={bien.validated_at !== null} onChange={validation} title={bien.validated_at?.slice(0, 16).replace('T', ' ')} disabled={bien.validated_at !== null}/></div> */}
              {/* <div className="cell slim"><FontAwesomeIcon icon={all.faRemove} className="burger" style={{fontSize: '18px', cursor: 'pointer'}}/></div> */}
            </div>
          </>
        )
      }
    </div>
  </>)
}