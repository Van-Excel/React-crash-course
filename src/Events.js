import React from 'react';

export function Events() {
  const eventHandler = () => {
    return console.log('Button clicked');
  };
  return (
    <div>
      <button onClick={eventHandler}>Click</button>
    </div>
  );
}
