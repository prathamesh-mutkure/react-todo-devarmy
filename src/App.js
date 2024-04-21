import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  // guyguyfguyguyguiy
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [value, setValue] = useState("");

  function onValueChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  function onAdd() {
    console.log(value);

    const newItems = [...items, value];
    // items.push(value);

    setItems(newItems);
    setValue("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>

        <input
          type="text"
          placeholder="Enter todo item: "
          value={value}
          onChange={onValueChange}
        />

        <button onClick={onAdd}>Add </button>

        <ol>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
