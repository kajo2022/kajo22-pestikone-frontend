import React from 'react'; 
import './Frame.css'; 


export default function UserTalk(props) {

    const lista = props.lista; 
    

    const adder = props.func;



    function ClickThis(e, key) {
        e.preventDefault();
         
        console.log(key)
        adder(key);
  
      }
    

    return (
        lista.map((item) => (
        <div className='Direct'>
        <div className='UserTalker Talker' 
        key={item.id} 
        onClick={(e) => ClickThis(e, item)}> 
        {item.desc} 
        </div>
        </div>
        ))
    )
    
}

