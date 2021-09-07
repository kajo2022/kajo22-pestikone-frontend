import React, {useEffect, useState} from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { css } from 'aphrodite';
import Styles from '../assets/styles/Style';




const BotTalk = (props) => {
    const tyyli = (props.onko ? css(Styles.position) : css(Styles.fadeInUp))

    //const [tyyli, setTyyli] = useState(css(Styles.fadeInUp))
    const listaus = require("../botalk.json");
    const id = props.id;
    const kyssari = listaus[id];

    return (
      <div className={tyyli}>
        <img className={css(Styles.avatar)} src={BotImage} alt="Kajo-Bot" />
        <div className={css(Styles.userTalker)}> {kyssari.desc} </div>
      </div>
    );
  };
export default BotTalk;