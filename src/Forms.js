import React from 'react';
import {useState} from 'react';

export function Forms() {
  const [userName, setUserName] = useState('')
  function handleSubmit(event){
    event.preventDefault()
    console.log({userName})
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value = {userName} onChange ={(event)=>{setUserName(event.target.value)}}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
