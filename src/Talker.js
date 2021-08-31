import React from 'react'; 
import './Frame.css'; 


export default function Talker(props) {
    
    let xd = props.desc; 



    return (
        <div className='Talker'>
            <text>{xd}</text>
        </div>

    )




}

