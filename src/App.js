import React, { useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = event.target.item.value.trim();
    if (newItem !== "") {
      setItems([...items, newItem]);
      event.target.reset();
    }
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Project 4: Shopping List</h1>
      <div className="container">
        <div className="list">
          <h2>Items To Buy</h2>
          <form onSubmit={handleSubmit}>
            <div className="white">
              <input type="text" name="item" placeholder="Add a new item" />
              <button type="submit">Add</button>
            </div>
          </form>

          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button className="delete" onClick={() => deleteItem(index)}>
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
