import React from 'react'; 
import './Frame.css'; 


export default function UserTalk(props) {

    function ClickThis(key) {
         
        console.log(key)
  
      }
      

    const output = props.item.desc;
    const id = props.item.id; 
    

    return (
        <div className='UserTalker' onClick={() => ClickThis(id)}> {output} </div>

    )
    
}

