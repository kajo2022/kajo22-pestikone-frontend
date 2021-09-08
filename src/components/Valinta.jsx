import React from 'react'; 
import Styles from '../assets/styles/Style';
import { css } from 'aphrodite';

export default function Valinta(props) {
    const lista = props.lista;

    return (
        <div className={css(Styles.row)}>
        {lista.map((item) => (
        <div className={css(Styles.userTalker, Styles.talker)}  
        key={item.id}> 
        {item.desc} 
        </div>))}
      </div>
    )
}