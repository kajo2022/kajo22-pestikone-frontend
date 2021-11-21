import React from 'react';
import SingleLine from './SingleLine';

export default function UserTalk(props) {

    const lista = props.lista; 
    const valinta = props.valinta; 
    const adder = props.func;
    return (
        lista.map((item) => (
            <SingleLine key={item.id} item={item} valinta={valinta} func={adder} onko={props.onko}/>
        ))
    )
    
}

