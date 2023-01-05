import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [color, setColor] = useState("red");
  const click = (color) => {
    setColor("#" + Math.random().toString(16).slice(2, 8));
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  });
  return (
    <div className="App">
      <div className="css">
        <button onClick={() => click("")}>Change Color</button>
      </div>
    </div>
  );
}

export default App;
