import React from 'react';

export const Lists = () => {
  const names = ['Bruce', 'Clark', 'Diana'];
  const listNames = names.map((name) => {
    return <li key={name}>{name}</li>;
  });
  return (
    <div>
      <ul>{listNames}</ul>
    </div>
  );
};
