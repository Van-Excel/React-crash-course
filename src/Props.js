import React from 'react';

export function Props(props) {
  return (
    <div>
      <h3>{props.name}</h3>

      <p>{props.children}</p>
    </div>
  );
}
