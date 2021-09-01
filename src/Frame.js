import "./Frame.css";
import React, { useState } from "react";
import UserTalker from "./UserTalker.js";
import BotImage from "./kajo_bot.png";

export default function Frame() {
  const lista1 = require("./tags1.json");
  const lista2 = require("./tags2.json");
  const kysymykset = require("./botalk.json");

  const [palautus, setPalautus] = useState({ jasennro: "", tags: [] });

  const handleChange = (e) => {
    e.preventDefault()
    setPalautus({ ...palautus, [e.target.name]: e.target.value });
  };

  const BotTalk = (props) => {
    const listaus = props.lista;
    const id = props.id;
    const kyssari = listaus[id];
    return (
      <div className="Row">
        <img className="Avatar-kajo" src={BotImage} alt="Kajo-Bot" />
        <div className="UserTalker"> {kyssari.desc} </div>
      </div>
    );
  };

  const confirmer = (e) => {
    e.preventDefault();
    console.log(palautus.jasennro);
  };

  const NumeroInput = () => {
    return (
      <div
        style={styles.outer}
      >
        <form onSubmit={confirmer}>
          <div className="Row">
            <label for="jasennro" style={styles.label}>Jäsennumero</label>
            <input
              style={styles.input}
              type="text"
              name="jasennro"
              value={palautus.jasennro}
              onChange={(e) => handleChange(e)}
              autoFocus
            />
            <button className='Btn' type='submit'>OK</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ alignSelf: "auto" }}>Tervetuloa Pestikoneeseen!!!</h1>
      <div className="Frame">
        <BotTalk lista={kysymykset} id={1} />
        <NumeroInput />
        <BotTalk lista={kysymykset} id={2} />
        {lista1.map((item) => (
          <div className="Direct" key={item.id}>
            
            <UserTalker item={item} />
          </div>
        ))}
        <BotTalk lista={kysymykset} id={3} />
        {lista2.map((item) => (
          <div className="Direct" key={item.id}>
            
            <UserTalker item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  input: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 20,
    width: 100,
    display: "flex",
    textAlign: "center",
  },
  label: {
    margin: 'auto',
    paddingRight: 10,
    color: 'Yellow'
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};
