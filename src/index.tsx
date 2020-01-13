import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import Header_1 from './components/Header_1';
import Header_2 from './components/Header_2';
import Header_3 from './components/Header_3';
import Images from './components/Images';
import Description from './components/Description';
//import Cart from './components/Cart';
import Price from './components/Price';
import Options from './components/Options';
import Shipping from './components/Shipping';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header_1 />, document.getElementById('header_1'));
ReactDOM.render(<Header_2 />, document.getElementById('header_2'));
ReactDOM.render(<Header_3 />, document.getElementById('header_3'));
//ReactDOM.render(<Images />, document.getElementById('images'));
ReactDOM.render(<Description />, document.getElementById('description'));
//ReactDOM.render(<Cart />, document.getElementById('cart'));
ReactDOM.render(<Price />, document.getElementById('price'));
ReactDOM.render(<Options />, document.getElementById('options'));
ReactDOM.render(<Shipping />, document.getElementById('shipping'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
