//import "./../assets/styles/Frame.css";
import React, { useState, useEffect } from "react";
import UserTalker from "./UserTalker";
import BotTalk from "./BotTalk";
import Valinta from "./Valinta";
import Styles from "../assets/styles/Style";
import { css } from "aphrodite";

import "../services/i18n";
import { useTranslation } from "react-i18next";

export default function Frame() {
  const { t, i18n } = useTranslation();

  const lista1 = require("../tags1.json");
  const lista2 = require("../tags2.json");
  const lista3 = require("../tags3.json");
  const lista4 = require("../tags4.json");
  const lista5 = require("../tags5.json");
  const initState = {
    jnro: false,
    paikka: false,
    mita: false,
    milloin: false,
    osaan: false,
  };
  const [ehto, setEhto] = useState(initState);

  const [jasen, setJasen] = useState("");
  const [valinta, setValinta] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setJasen(e.target.value);
  };

  const lisaa = (item) => {
    console.log(item);
    setValinta([...valinta, item]);
  };

  const clear = () => {
    setValinta([]);
    setEhto(initState);
  };

  useEffect(() => {
    for (var i = 0; i < valinta.length; i++) {
      if (valinta[i].type === 1) {
        setEhto({ ...ehto, paikka: true });
      }
      if (valinta[i].type === 2) {
        setEhto({ ...ehto, mita: true });
      }
      if (valinta[i].type === 3) {
        setEhto({ ...ehto, milloin: true });
      }
      if (valinta[i].type === 4) {
        setEhto({ ...ehto, osaan: true });
      }
    }
  }, [valinta]);

  const confirmer = (e) => {
    e.preventDefault();
    console.log(jasen);
    setEhto({ ...ehto, jnro: true });
  };

  const Frag1 = () => {
    return (
      <div>
        <BotTalk id={2} /> 
        <UserTalker lista={lista1} func={lisaa} />
      </div>
    );
  };
  const Frag2 = () => {
    return (
      <div>
        <BotTalk id={3} /> 
        <UserTalker lista={lista2} func={lisaa} />
      </div>
    );
  };
  const Frag3 = () => {
    return (
      <div>
        <BotTalk id={4} /> 
        <UserTalker lista={lista3} func={lisaa} />
      </div>
    );
  };
  const Frag4 = () => {
    return (
      <div>
        <BotTalk id={5} /> 
        <UserTalker lista={lista4} func={lisaa} />
      </div>
    );
  };
  const Frag5 = () => {
    return (
      <div>
        <BotTalk id={6} /> 
        <UserTalker lista={lista5} func={lisaa} />
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ alignSelf: "auto" }}>{t("Tervetuloa Pestikoneeseen!!!")}</h1>
      <div className={css(Styles.frame)}>
        <BotTalk id={0} />
        <BotTalk id={1} />
        <div style={styles.outer}>
          <div className={css(Styles.row)}>
            <label for="jasennro" style={styles.label}>
              {t("Jäsennumero")}
            </label>
            <input
              style={styles.input}
              type="text"
              name="jasennro"
              value={jasen}
              onChange={(e) => handleChange(e)}
            />
            <button className={css(Styles.btn)} onClick={confirmer}>
              {t("OK")}
            </button>
          </div>
        </div>
        {ehto.jnro ? <Frag1 /> : null}
        {ehto.paikka ? <Frag2 /> : null}
        {ehto.mita ? <Frag3 /> : null}
        {ehto.milloin ? <Frag4 /> : null}
        {ehto.osaan ? <Frag5 /> : null}
      </div>
      <div className={css(Styles.frame2)}>
        <button className={css(Styles.btn)} onClick={clear}>
          {t("Tyhjennä")}
        </button>
        {valinta.length > 0 ? <Valinta lista={valinta} /> : null}
      </div>
      <div className={css(Styles.row)}>
        <button
          class={css(Styles.userTalker, Styles.talker)}
          onClick={() => i18n.changeLanguage("fi")}
        >
          Suomi
        </button>
        <button
          class={css(Styles.userTalker, Styles.talker)}
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        <button
          class={css(Styles.userTalker, Styles.talker)}
          onClick={() => i18n.changeLanguage("se")}
        >
          Svenska
        </button>
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
    margin: "auto",
    paddingRight: 10,
    color: "Yellow",
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
