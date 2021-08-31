//import logo from './logo.svg';
//import './App.css';
import './pestistyle.css'
import {ChatBox} from 'react-chatbox-component';
import {useState} from "react";
import './'


const App = () => {

  const [messages, useMessages] = useState([
    {
      "text": "Hei! Tervetuloa tekemään Finnjamboree Kajon pestikonetta! Ennen pestikoneen alkua kysymme sinulta partion jäsennumerosi, jotta voimme yhdistää tulokset sinuun.",
      "id": "1",
      "sender": {
        "name": "Ironman",
        "uid": "bot",
        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      "text": "Asia selvä!",
      "id": "2",
      "sender": {
        "name": "Käyttäjä",
        "uid": "user",
        "avatar": "https://seura.fi/awpo/img/2015/08/IP12798_031.jpg",
      },
    },
    
  ], [])

  const user = {
    "uid": "user"
  }
  return (
    <div className="App">
      <h1>Pestikone :DDDD</h1>
      <label for='jasennumero'>Jäsennumerosi</label>
      <input type='text' id='jasennumero' name='jasennumero'></input>
      <button id='nappulaxd' onClick={ () => console.log(document.getElementsByClassName('message-input')[0].value) } >Asia selvä!</button>
      <ChatBox messages={messages} user={user}/>
    </div>
  );
  
}

export default App;