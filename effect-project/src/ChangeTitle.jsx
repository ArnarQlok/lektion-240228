import { useState, useEffect } from "react";

function ChangeTitle() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  function addCount() {
    setCount((c) => c + 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  useEffect(() => {
    document.title = `Count ${count} ${color}`;
  }, [count, color]);

  return (
    <div>
      <p style={{ color: color }}>Count: {count} </p>
      <button onClick={addCount}>+</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ChangeTitle;
