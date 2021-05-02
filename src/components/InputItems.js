import React,{useState} from "react"
function InputItems(props)
{
 
  const [inputItem, setItem] = useState("")
  function inputHandler(event) {
    const value = event.target.value;
    setItem(value);
  }
  return(
    <form >
        <input type="text" value={inputItem} onChange={inputHandler} />
        <span className="btnSpan">
          <button  className="btn" onClick={(event)=>{props.addItemHandler(event,inputItem);setItem("");}} >
            Add
          </button>
        </span>
      </form>
      
     )
}
export default InputItems