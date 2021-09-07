import React, { useEffect, useRef } from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { css } from 'aphrodite';
import Styles from '../assets/styles/Style';




const BotTalk = (props) => {
    const refit = useRef(null)
    const tyyli = (props.onko ? css(Styles.position) : css(Styles.fadeInLeft))

    const listaus = require("../botalk.json");
    const id = props.id;
    const kyssari = listaus[id];

    useEffect(() => {
     refit.current.scrollIntoView({behavior: 'smooth', block: 'start'})
     refit.current = null;
    
    }, [])

    return (
      <div className={tyyli} ref={refit}>
        <img className={css(Styles.avatar)} src={BotImage} alt="Kajo-Bot" />
        <div className={css(Styles.userTalker)}> {kyssari.desc} </div>
      </div>
    );
  };
export default BotTalk;