import '.'
import Frame from './components/Frame.jsx';
import Styles from './assets/styles/Style';
import { css } from 'aphrodite';


const App = () => {

  
  return (
    <div className={css(Styles.app)}>
      <Frame/>
    </div>
  );
  
}

export default App;