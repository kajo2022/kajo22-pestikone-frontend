import React, { useEffect, useRef } from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { css } from 'aphrodite';
import Styles from '../assets/styles/Style';
import i18n from '../services/i18n'




const BotTalk = (props) => {
    const refit = useRef(null)
    const tyyli = (props.onko ? css(Styles.position) : css(Styles.fadeInLeft))

    const listaus = require("../botalk").default;
    const id = props.id;
    const kyssari = listaus[id];

    useEffect(() => {
      if (!props.onko) {
        refit.current.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    }, [props.onko])

    return (
      <div className={tyyli} ref={refit}>
        <img className={css(Styles.avatar)} src={BotImage} alt="Kajo-Bot" />
        <div className={css(Styles.userTalker)}> {i18n.t(kyssari.desc)} </div>
      </div>
    );
  };
export default BotTalk;