import React, { useEffect, useState } from 'react';
import Styles from '../assets/styles/Style';
import { css } from 'aphrodite';
import i18n from '../services/i18n'


export default function SingleLine (props) {
    const item = props.item; 
    const valinta = props.valinta; 

    const adder = props.func;

    const tyyli = (props.onko ? null : Styles.fadeInRight)


    function ClickThis(e, key) {
        e.preventDefault();
        adder(key);
      }

    const [bool, setBool] = useState(false); 


    useEffect(() => {
        
        valinta.forEach(element => {
            if(item.id === element.id){
                setBool(true);  
            }
        });


        }, [valinta, item])


    return(
        <div className={css(Styles.direct)}>
        <div className={bool ? (css(Styles.userTalker2, tyyli)): (css(Styles.userTalker, Styles.talker, tyyli))} 
        key={item.id} 
        onClick={(e) => ClickThis(e, item)}> 
        {i18n.t(item.desc)} 
        </div>
        </div>
    )
}