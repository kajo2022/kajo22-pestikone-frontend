import React from 'react'; 
import './Frame.css'; 


export default function UserTalk(props) {

    const lista = props.lista; 



    function ClickThis(key) {
         
        console.log(key)
        //props.updater.newTag(key);
  
      }
    

    return (
        lista.map((item) => (
        <div className='Direct' >
        <div className='UserTalker Talker' 
        key={item.key} 
        onClick={() => ClickThis(item.key)}> 
        {item.desc} 
        </div>
        </div>
        ))
    )
    
}

