import React from 'react';
import './style.css';
import { FirstComponent } from './FirstComponent.js';
import {Props} from "./Props.js"
import {State} from './State.js'
import {Events} from './Events.js'
import {Parent} from './Parent.js'
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FirstComponent />
      <Props name= 'vanexcel' />
      <Props name= 'Theophilus'><p>This is a child prop</p></Props>
      <State />
      <Events />
      <Parent />
    </div>
  );
}
