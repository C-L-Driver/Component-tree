import React, { useState } from "react";

const [uline, setUline] = useState(false)

function lineThrough () {
  
  const customStyle = {

      text-decoration: "line-through"
    }


    setUline(true)


  return (
    
    //  trueorfalse ? 
    // style={customStyle} :
    // null 
    
    // )
  }


function ToDoItem(props) {

  return ( 
  
  
  <li onClick={lineThrough}> {props.text}</li>
    
  
    )
}


  
    
   
  
  
  
  
  
  
  
  
  
}

export default ToDoItem;
