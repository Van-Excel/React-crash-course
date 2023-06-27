import React from 'react';



export function Child(props){

  return(
    <div>
      <button onClick ={props.handleClick}>Child communication</button>
    </div>
  )

}