import { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("");
  const styles1 = {
    background: color,
  };
  const [colorList, setColorList] = useState(["red", "orange", "pink"]);
  return (
    <div className="color">
      <input style={styles1} value={color} onChange={(event) => setColor(event.target
        .value)} placeholder="enter a color" />
      <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
