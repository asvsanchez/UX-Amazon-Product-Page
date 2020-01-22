import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Client from './components/Client';
import Offers from './components/Offers';
import Devices from './components/Devices';
import Advertisement from './components/Advertisement';
import Gift from './components/Gift';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Client />, document.getElementById('client'));
ReactDOM.render(<Offers />, document.getElementById('offers'));
ReactDOM.render(<Devices />, document.getElementById('devices'));
ReactDOM.render(<Advertisement />, document.getElementById('advert'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
