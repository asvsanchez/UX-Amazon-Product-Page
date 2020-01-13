import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import Header1 from './components/Header_1';
import Header2 from './components/Header_2';
import Header3 from './components/Header_3';
import Advertisement from './components/Advertisement';
import Images from './components/Images';
//import Photo from './components/Photo';
import Title from './components/Title';
import Description from './components/Description';
import Cart from './components/Cart';
import Price from './components/Price';
import Gift from './components/Gift';
import Options from './components/Options';
import Shipping from './components/Shipping';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header1 />, document.getElementById('header_1'));
ReactDOM.render(<Header2 />, document.getElementById('header_2'));
ReactDOM.render(<Header3 />, document.getElementById('header_3'));
ReactDOM.render(<Advertisement />, document.getElementById('advert'));
ReactDOM.render(<Images />, document.getElementById('images'));
//ReactDOM.render(<Photo />, document.getElementById('photo'));
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Price />, document.getElementById('price'));
ReactDOM.render(<Shipping />, document.getElementById('shipping'));
ReactDOM.render(<Description />, document.getElementById('description'));
ReactDOM.render(<Cart />, document.getElementById('cart'));
ReactDOM.render(<Gift />, document.getElementById('gift'));
ReactDOM.render(<Options />, document.getElementById('options'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
