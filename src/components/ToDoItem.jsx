import React, { useState } from "react";


function lineThrough (trueorfalse) {
  return (
    <div>
    trueorfalse ? 
    style=text-decoration: "line-through" :
    style=text-decoration: ""
    </div>
    )
}
function ToDoItem(props) {

  return ( 
  
  
  <li onClick={lineThrough}> {props.text}</li>
    
  
    )
}

  
    
   
  
  
  
  
  
  
  
  
  
}

export default ToDoItem;
