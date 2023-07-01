import { css } from "../styled-system/css";
import FastForm from "./component/Form/Form";
import "./index.css";
function App() {
  return (
    <div
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        color: "blue.200",
      })}
    >
      Hello 🐼!dazd
      <FastForm />
    </div>
  );
}

export default App;
