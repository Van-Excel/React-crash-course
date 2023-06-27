import React from 'react';
import { useState } from 'react';

export function State() {
  const [message, setMessage] = useState('welcome visitor');

  function handleClick() {
    return setMessage('Thank you for subscribing');
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
}
