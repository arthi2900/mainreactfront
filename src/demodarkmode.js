//props drilling
/*
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("Light");
  const styles = { background: mode === "light" ? "black" : "white" };
  return (
    <div style={styles} className="App">
      <List setMode={setMode} mode={mode} />
    </div>
  );
}
const List = ({ setMode, mode }) => (
  <ul>
    <ListItem value="Light" setMode={setMode} mode={mode} />
    <ListItem value="Dark" setMode={setMode} mode={mode} />
  </ul>
);

const ListItem = ({ value, setMode, mode }) => (
  <li>
    <Button value={value} setMode={setMode} mode={mode} />
  </li>
);
const Button = ({ value, setMode, mode }) => {
  const styles = {
    background: !(mode === "light") ? "black" : "white",
    color: mode === "light" ? "black" : "white"
  };
  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light" ? "dark" : "light")}
    >
      {value}
    </button>
  );
};
*/
//using context
import "./styles.css";
import { useState, useContext, createContext } from "react";
const themctx = createContext(null);
export default function App() {
  const [mode, setMode] = useState("Light");
  const styles = { background: mode === "light" ? "black" : "white" };

  return (
    <themctx.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List />
      </div>
    </themctx.Provider>
  );
}
const List = () => (
  <ul>
    <ListItem value="Light" />
    <ListItem value="Dark" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);
const Button = ({ value }) => {
  const [mode, setMode] = useContext(themctx);
  const styles = {
    background: !(mode === "light") ? "black" : "white",
    color: mode === "light" ? "black" : "white"
  };

  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light" ? "dark" : "light")}
    >
      {value}
    </button>
  );
};
