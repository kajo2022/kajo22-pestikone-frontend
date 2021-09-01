import "./Frame.css";
import React, { useState } from "react";
import UserTalker from "./UserTalker.js";
import BotTalk from "./BotTalk";


export default function Frame() {
  const lista1 = require("./tags1.json");
  const lista2 = require("./tags2.json");
  const kysymykset = require("./botalk.json");

  const [palautus, setPalautus] = useState({ jasennro: "", tags: [] });

  const handleChange = (e) => {
    e.preventDefault()
    setPalautus({ ...palautus, [e.target.name]: e.target.value });
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
      <BotTalk lista={kysymykset} id={0} />
        <BotTalk lista={kysymykset} id={1} />
        <NumeroInput />
        <BotTalk lista={kysymykset} id={2} />
        <UserTalker lista={lista1}/>
        <BotTalk lista={kysymykset} id={3} />
        <UserTalker lista={lista2}/>
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
