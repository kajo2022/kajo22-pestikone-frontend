import ".";
import Frame from "./components/Frame.jsx";
import Styles from "./assets/styles/Style";
import { css } from "aphrodite";
import Closed from "./components/Closed";

const App = () => {
  return (
    <div className={css(Styles.app)}>
      <Closed />
    </div>
  );
};

export default App;
