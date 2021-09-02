import './App.css';
import Frame from './Frame.js'; 

const App = () => {

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