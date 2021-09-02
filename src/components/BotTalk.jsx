import React from 'react';
import BotImage from "./../assets/images/kajo_bot.png";


const BotTalk = (props) => {
    const listaus = require("../botalk.json");
    const id = props.id;
    const kyssari = listaus[id];
    return (
      <div className="Row">
        <img className="Avatar-kajo" src={BotImage} alt="Kajo-Bot" />
        <div className="UserTalker"> {kyssari.desc} </div>
      </div>
    );
  };

export default BotTalk;