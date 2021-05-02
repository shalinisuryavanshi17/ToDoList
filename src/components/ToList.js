import React, { useState } from "react";
import InputItems from "./InputItems";
import Items from "./Items";
function ToDoList(props) {
 ;
  const [items, setItems] = useState([]);
  
  function addItem(event,inputItem) {
    event.preventDefault()
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });

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
      <InputItems addItemHandler={addItem}/>
      {items.map((item, index) => (
        <Items item={item} key={index} id={index} isChecked={deleteItem} />
      ))}
    </div>
  );
}
export default ToDoList;
