import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function inc() {
    setCount(++count);
    console.log(count);
  }

  function dec() {
    setCount(--count);
    console.log(count);
  }

  return (
    <div className="counter-func">
      <h1>{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
};

export default Counter;
