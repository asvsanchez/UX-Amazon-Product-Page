import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import Client from './components/Client';
import Offers from './components/Offers';
import Devices from './components/Devices';
import Advertisement from './components/Advertisement';
import Images from './components/Images';
//import Photo from './components/Photo';
import Title from './components/Title';
import Review from './components/Review';
import Description from './components/Description';
import Cart from './components/Cart';
import Price from './components/Price';
import Gift from './components/Gift';
import Options from './components/Options';
import Shipping from './components/Shipping';
import Wish from './components/Wish';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Client />, document.getElementById('client'));
ReactDOM.render(<Offers />, document.getElementById('offers'));
ReactDOM.render(<Devices />, document.getElementById('devices'));
ReactDOM.render(<Advertisement />, document.getElementById('advert'));
ReactDOM.render(<Images />, document.getElementById('images'));
//ReactDOM.render(<Photo />, document.getElementById('photo'));
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Review />, document.getElementById('review'));
ReactDOM.render(<Price />, document.getElementById('price'));
ReactDOM.render(<Shipping />, document.getElementById('shipping'));
ReactDOM.render(<Description />, document.getElementById('description'));
ReactDOM.render(<Cart />, document.getElementById('cart'));
ReactDOM.render(<Gift />, document.getElementById('gift'));
ReactDOM.render(<Options />, document.getElementById('options'));
ReactDOM.render(<Wish />, document.getElementById('wish'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
