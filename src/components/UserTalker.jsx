import React, { useEffect, useState } from 'react';
import Styles from '../assets/styles/Style';
import { css } from 'aphrodite';

export default function UserTalk(props) {

    const lista = props.lista; 
    

    const adder = props.func;

    const tyyli = (props.onko ? null : Styles.fadeInRight)


    function ClickThis(e, key) {
        e.preventDefault();
        adder(key);
      }
    

    return (
        lista.map((item) => (
        <div className={css(Styles.direct)}>
        <div className={css(Styles.userTalker, Styles.talker, tyyli)} 
        key={item.id} 
        onClick={(e) => ClickThis(e, item)}> 
        {item.desc} 
        </div>
        </div>
        ))
    )
    
}

