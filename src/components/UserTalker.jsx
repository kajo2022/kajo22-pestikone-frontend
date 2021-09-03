import React from 'react';
import Styles from '../assets/styles/Style';
import { css } from 'aphrodite';

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
        <div className={css(Styles.direct)}>
        <div className={css(Styles.userTalker, Styles.talker)} 
        key={item.id} 
        onClick={(e) => ClickThis(e, item)}> 
        {item.desc} 
        </div>
        </div>
        ))
    )
    
}

