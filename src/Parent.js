import React from 'react';
import { Child } from './Child.js';

export function Parent() {
  function clickSwitch() {
    console.log('I am a parent component');
  }
  return (
    <div>
      <Child handleClick={clickSwitch} />
    </div>
  );
}
