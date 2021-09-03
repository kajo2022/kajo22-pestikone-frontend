import React from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { css } from 'aphrodite';
//import { fadeInUp } from 'react-animations';
import Styles from '../assets/styles/Style';




const BotTalk = (props) => {
    const listaus = require("../botalk.json");
    const id = props.id;
    const kyssari = listaus[id];
    return (
      <div className={css(Styles.fadeInUp)}>
        <img className={css(Styles.avatar)} src={BotImage} alt="Kajo-Bot" />
        <div className={css(Styles.userTalker)}> {kyssari.desc} </div>
      </div>
    );
  };
  /*
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp, 
    animationDuration: '3s',
    display: 'flex',
    flexWrap: 'wrap'
  }
})
*/
export default BotTalk;