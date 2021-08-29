import "./Frame.css";
import React, { useState } from 'react'; 
//import Talker from './Talker.js'; 

export default function Frame() {
    const lista = require('./tags.json');
    const lista2 = [
        { "id": 1, "desc": "Näe leirialuetta", "type": 1 },
        { "id": 2, "desc": "Siisti sisätyö", "type": 1 },
        { "id": 3, "desc": "Yhdessä paikassa", "type": 1 },
        { "id": 4, "desc": "Leirin ulkopuolella", "type": 1 },
        { "id": 5, "desc": "Varmasti ulkona", "type": 1 },
        { "id": 6, "desc": "Jotain ihan uutta", "type": 2 },
        { "id": 7, "desc": "Muiden ohjaamista", "type": 2 },
        { "id": 8, "desc": "Paljon uusia ihmisiä", "type": 2 },
        { "id": 9, "desc": "Auttaa ja palvella", "type": 2 },
        { "id": 10, "desc": "Reilusti kahvia", "type": 2 }]

    //const {palautus, setPalautus} = useState({jasennro: "", tags: []}); 
    
    function Talker(props) {
        const output = props.item.desc;

        return (
            <div className='Talker'>
                {output}
                
            </div>
    
        )}



  return (
    <div>
      <h1>Tervetuloa Pestikoneeseen!!!</h1>
      <div className="Frame">
          {lista.map((item) => <div id={item.id.toString()}> <Talker item={item} /> </div>)}
        
      </div>
    </div>
  );
}
