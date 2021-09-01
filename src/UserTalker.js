import React from 'react'; 
import './Frame.css'; 


export default function UserTalk(props) {

    

    function ClickThis(key) {
         
        console.log(key)
        //props.updater.newTag(key);
  
      }
      

    const output = props.item.desc;
    const id = props.item.id; 
    

    return (
        <div className='UserTalker Talker' onClick={() => ClickThis(id)}> {output} </div>

    )
    
}

