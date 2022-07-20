import { Customer } from './customer.js';
import './default.css';
import kitten from './cute-kitten.jpg';

console.log('hoi');

let jp = new Customer();
jp.buy();


let img = document.createElement('img');
img.setAttribute('src', kitten);
document.body.appendChild(img);