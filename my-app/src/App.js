import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  let [value, setValue] = useState("str");

  return (
    <div className="app">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}></input>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <ClassCounter></ClassCounter>
    </div>
  );
}

export default App;
