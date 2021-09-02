import React from 'react'; 

export default function Valinta(props) {
    const lista = props.lista;

    return (
        <div className="Row">
        {lista.map((item) => (
        <div className='UserTalker Talker' 
        key={item.id}> 
        {item.desc} 
        </div>))}
      </div>
    )
}