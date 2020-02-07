import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let dialogs = [
  {id: 1, name: 'Edd'},
  {id: 2, name: 'Ihor'},
  {id: 3, name: 'Nicolas'},
  {id: 4, name: 'Marty'},
  {id: 5, name: 'Emmet'}
];

let messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "Hello!!"},
  {id: 3, message: "What's up guys!!"},
  {id: 4, message: "Hey Guy's what was that"},
  {id: 5, message: "Get outta here!!!"},
];

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
