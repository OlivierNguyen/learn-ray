import React, { useState } from "react";

// Same than Count component, but written in new way (Hooks)
export default function CountTwo() {
  const [count, setCount] = useState(29);

  const onClickPlus = () => setCount(count + 1);

  const onClickMinus = () => setCount(count - 1);

  return (
    <div className="Count">
      <div className="title">Count</div>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
      <div>Count: {count}</div>
    </div>
  );
}

let count = 0;
count = count + 1;
count++;
