import "./Frame.css";
import React, { useState } from 'react'; 
import UserTalker from './UserTalker.js'; 

export default function Frame() {
    const lista1 = require('./tags1.json');
    const lista2 = require('./tags2.json');
    const kysymykset = require('./botalk.json');

    const [palautus, setPalautus] = useState({jasennro: "", tags: []}); 

    const handleChange = (e) => {
      setPalautus({...palautus, [e.target.name]: e.target.value})
    }

    const BotTalk = (props) => {
      const listaus = props.lista;
      const id = props.id;
      const kyssari = listaus[id];
      return (
        <div className='UserTalker'> {kyssari.desc} </div>
      )
    }
       
//jasennro tehdään formi tyyppiseksi. 


  return (
    <div>
      <h1 style={{alignSelf: 'auto'}}>Tervetuloa Pestikoneeseen!!!</h1>
      <div className="Frame">
        <BotTalk lista={kysymykset} id={1}/>
        <input  style={{ 
    	height: 35, 
    	borderColor: 'gray', 
    	borderWidth: 1,
    	fontSize:20,
      width: 100,
      textAlign: 'center'
    }} type='text' name='jasennro' value={palautus.jasennro} onChange={e => handleChange(e)}/>
        <BotTalk lista={kysymykset} id={2}/>
        {lista1.map((item) => <div className='Direct' key={item.id}>  <UserTalker item={item} /> </div> )}
        <BotTalk lista={kysymykset} id={3}/>
        {lista2.map((item) => <div className='Direct' key={item.id}>  <UserTalker item={item} /> </div>) }

        
      </div>
    </div>
  );
}
