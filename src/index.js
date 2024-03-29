import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/bootstrap/dist/js/bootstrap';

ReactDOM.render(<App />, document.getElementById('to-do'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();