import React, { useEffect, useRef } from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { css } from 'aphrodite';
import Styles from '../assets/styles/Style';
import i18n from '../services/i18n'


const ExitComp = (props) => {
    

    const tyyli = (props.onko ? css(Styles.position) : css(Styles.fadeInLeft))


    const dialog = [
        {
            desc: i18n.t("Tarkista vastauksesi.")
        },
        { 
            desc: i18n.t("Jos haluat aloittaa alusta, paina 'Tyhjennä valinnat'")
        },
        {
            desc: i18n.t("Jos olet valmis, paina 'Lähetä valinnat'")
        }

    ]
    //const kyssari = listaus[id];
    const sender = props.sender;
    const clearer = props.clear; 

//css(Styles.userTalker, Styles.talker)
    


    return (
        <div className={tyyli}>
        <img className={css(Styles.avatar)} src={BotImage} alt="Kajo-Bot" />
        <div className={css(Styles.column)}>
        <div className={css(Styles.userTalker)}> {dialog[0].desc} </div>
        <div className={css(Styles.userTalker)}> {dialog[1].desc} </div>
        <button className={css(Styles.userTalker, Styles.talker)} onClick={clearer}>
          {i18n.t("Tyhjennä")}
        </button>
        <div className={css(Styles.userTalker)}> {dialog[2].desc} </div>
        <button className={css(Styles.userTalker, Styles.talker)} onClick={sender}>
          {i18n.t("Päätä kysely.")}
        </button>
        </div>
      </div>

    )
}

export default ExitComp; 