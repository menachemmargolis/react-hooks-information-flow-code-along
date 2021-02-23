import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [childrenColor, setChildrenColor] = useState("#FFF");
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  
  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newRandomColor)
  }


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
