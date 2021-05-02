import React, { useState } from "react";
import Items from "./Items";
function ToDoList(props) {
  const [inputItem, setItem] = useState("");
  const [items, setItems] = useState([]);
  function inputHandler(event) {
    const value = event.target.value;
    setItem(value);
  }
  function addItem(event) {
    console.log("clicked");
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    event.preventDefault();
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
  }
  return (
    <div className="ListContainer">
      <h1 className="title">{props.title}</h1>
      <form>
        <input type="text" value={inputItem} onChange={inputHandler} />
        <span className="btnSpan">
          <button type="submit" className="btn" onClick={addItem}>
            Add
          </button>
        </span>
      </form>
      {items.map((item, index) => (
        <Items item={item} key={index} id={index} isChecked={deleteItem} />
      ))}
    </div>
  );
}
export default ToDoList;
