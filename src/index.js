import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

require("jspolyfill-array.prototype.findIndex");
require("es6-object-assign").polyfill();
require("es6-promise").polyfill();

var sAgent = window.navigator.userAgent;
var Idx = sAgent.indexOf("MSIE");

// If IE, return version number.
if (Idx > 0) 
    alert('IE 10 or older does not very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)');
// If IE 11 then look for Updated user agent string.
else if (!!navigator.userAgent.match(/Trident\/7\./)) {
    alert('IE 11 does not work very well with React, please use a modern browser (Chrome, Firefox, Edge, etc)');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
