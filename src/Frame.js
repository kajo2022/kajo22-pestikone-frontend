import "./Frame.css";
import React, { useState } from 'react'; 
import UserTalker from './UserTalker.js'; 

export default function Frame() {
    const lista1 = require('./tags1.json');
    const lista2 = require('./tags2.json');
    const kysymykset = require('./botalk.json');

    //const {palautus, setPalautus} = useState({jasennro: "", tags: []}); 
    const BotTalk = (props) => {
      const listaus = props.lista;
      const id = props.id;
      const kyssari = listaus[id];
      return (
        <div className='UserTalker'> {kyssari.desc} </div>
      )

    }
   
       



  return (
    <div>
      <h1 style={{alignSelf: 'auto'}}>Tervetuloa Pestikoneeseen!!!</h1>
      <div className="Frame">
        <BotTalk lista={kysymykset} id={1}/>
        <BotTalk lista={kysymykset} id={2}/>
        {lista1.map((item) => <div className='Direct' key={item.id}>  <UserTalker item={item} /> </div> )}
        <BotTalk lista={kysymykset} id={3}/>
        {lista2.map((item) => <div className='Direct' key={item.id}>  <UserTalker item={item} /> </div>) }

        
      </div>
    </div>
  );
}
