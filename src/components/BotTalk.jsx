import React from 'react';
import BotImage from "./../assets/images/kajo_bot.png";
import { StyleSheet, css } from 'aphrodite';
import { fadeInUp } from 'react-animations';




const BotTalk = (props) => {
    const listaus = require("../botalk.json");
    const id = props.id;
    const kyssari = listaus[id];
    return (
      <div className={css(styles.fadeInUp)}>
        <img className="Avatar-kajo" src={BotImage} alt="Kajo-Bot" />
        <div className="UserTalker"> {kyssari.desc} </div>
      </div>
    );
  };
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp, 
    animationDuration: '3s',
    display: 'flex',
    flexWrap: 'wrap',
    animationIterationCount: 1,
  }
})

export default BotTalk;