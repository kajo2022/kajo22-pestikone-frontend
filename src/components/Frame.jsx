import React, { useState, useEffect } from "react";
import UserTalker from "./UserTalker";
import BotTalk from "./BotTalk";
import Styles from "../assets/styles/Style";
import { css } from "aphrodite";
import { validator } from "../services/Validator";
import ExitComp from "./ExitComp";

import "../services/i18n";
import { useTranslation } from "react-i18next";

export default function Frame() {
  const { t, i18n } = useTranslation();

  const lista1 = require("../tags1");
  const lista2 = require("../tags2");
  const lista3 = require("../tags3");
  const lista4 = require("../tags4");
  const lista5 = require("../tags5");
  const initState = {
    jnro: false,
    paikka: false,
    mita: false,
    mita2: false,
    milloin: false,
    osaan: false,
    osaan2: false,
    patev: false
  };
  const [ehto, setEhto] = useState(initState);

  const [jasen, setJasen] = useState("");
  const [valinta, setValinta] = useState([]);


  useEffect(() => {
    //haetaan parametri osoitteesta
    const query = window.location.search;
    //console.log(query); 
    const urlId = new URLSearchParams(query); 
    //console.log(urlId);
    let anid = urlId.get('uuid'); 
    //console.log(anid); 
    setJasen(anid); 
  }, []); 

  const lisaa = (item) => {
    //console.log(item.id);
    if (validator(valinta, item)) {
      setValinta([...valinta, item]);
    }
  };

  const clear = () => {
    setValinta([]);
    setEhto(initState);
  };

  useEffect(() => {
      if (valinta.length === 1) {
        setEhto({ ...ehto, paikka: true });
        //Laukaisee Frag2
        //kutsuu uudestaan myös tyylin, jolloin välähtää
      }
      if (valinta.length === 2) {
        setEhto({ ...ehto, mita: true });
        //tappaa fadin
      }
      if (valinta.length === 3) {
        setEhto({ ...ehto, mita2: true });
        //Laukaisee Frag3
      }
      if (valinta.length === 4) {
        setEhto({ ...ehto, milloin: true });
        //Laukaisee Frag4
      }
      if (valinta.length === 5) {
        setEhto({ ...ehto, osaan: true });
        //tappaa fadin
      }
      if (valinta.length === 6) {
        setEhto({ ...ehto, osaan2: true });
        //Laukaisee Frag5
      }
      if (valinta.length > 6) {
        setEhto({ ...ehto, patev: true });
        //tappaa fadin
      }
      // eslint-disable-next-line
  }, [valinta]);

  const confirmer = (e) => {
    e.preventDefault();
    //console.log(jasen);
    setEhto({...ehto, jnro: true });
    //laukaisee Frag1
  };

  const Frag1 = () => {
    return (
      <>
        <BotTalk id={2} onko={ehto.paikka}/> 
      <UserTalker lista={lista1.default} func={lisaa} onko={ehto.paikka} valinta={valinta}/>
      </>
    );
  };
  const Frag2 = () => {
    return (
      <>
        <BotTalk id={3} onko={ehto.mita}/> 
      <UserTalker lista={lista2.default} func={lisaa} onko={ehto.mita} valinta={valinta}/>
      </>
    );
  };
  const Frag3 = () => {
    return (
      <>
        <BotTalk id={4} onko={ehto.milloin}/> 
        <UserTalker lista={lista3.default} func={lisaa} onko={ehto.milloin} valinta={valinta}/>
      </>
    );
  };
  const Frag4 = () => {
    return (
      <>
        <BotTalk id={5} onko={ehto.osaan}/> 
        <UserTalker lista={lista4.default} func={lisaa} onko={ehto.osaan} valinta={valinta}/>
      </>
    );
  };
  const Frag5 = () => {
    return (
      <>
        <BotTalk id={6} onko={ehto.patev}/> 
        <UserTalker lista={lista5.default} func={lisaa} onko={ehto.patev} valinta={valinta}/>
        <ExitComp id={7} sender={checkit} clear={clear} onko={ehto.patev}/>
      </>
    );
  };

  const checkit = () => {
    var r = window.confirm("Olethan nyt varma"); 
    if(r===true) {
      sendit(); 
    }

  }

  const sendit = () => {
    var tags = valinta.map((item) => item.id); 
    console.log(tags);
    //let numeroitu = parseInt(jasen);  
    var data = {id: jasen, tags: tags}; 
    console.log(JSON.stringify(data));
    
/*
    var target = 'http://localhost:5000/reception'
      fetch(target, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch ((error) => {
      console.log(error)
      })
*/
  }
  

  return (
    <div>
      <div className={css(Styles.container)}>

      <div className={css(Styles.frame)}>
      <h1 className={css(Styles.textCent)}>{t("Tervetuloa Kajon pestikoneeseen!")}</h1>
        <div className={css(Styles.row, Styles.outer) }>
      <button className={css(Styles.userTalker, Styles.talker)} onClick={() => {
          i18n.changeLanguage('fi');
          document.documentElement.lang = 'fi';
        }
        }>Suomi</button>
        <button className={css(Styles.userTalker, Styles.talker)} onClick={() => {
          i18n.changeLanguage('en')
          document.documentElement.lang = 'en'
          }}>English</button>
        <button className={css(Styles.userTalker, Styles.talker)} onClick={() => {
          i18n.changeLanguage('se')
          document.documentElement.lang = 'se'
       }}>Svenska</button>
        </div>
        <BotTalk id={0} />
        <BotTalk id={1} />
        <div className={css(Styles.outer)}>
          <button className={css(Styles.btn)} onClick={confirmer}>
              {t("OK")}
            </button>
        </div>
        
        
        {ehto.jnro ? <Frag1 /> : null}
        {ehto.paikka ? <Frag2 /> : null}
        {ehto.mita2 ? <Frag3 /> : null}
        {ehto.milloin ? <Frag4 /> : null}
        {ehto.osaan2 ? <Frag5 /> : null}
      </div>
      </div>
      
    </div>
  );
}






