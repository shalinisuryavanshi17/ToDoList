import React from "react";


function Items(props)
{
 //calling the parent function using props when clicked
return <div onClick={()=>{
props.isChecked(props.id)
}}><li>{props.item}</li></div>
}
export default Items;