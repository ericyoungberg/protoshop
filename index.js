/**
 * ProtoShop
 */

import ReactDOM from 'react-dom';

import ProtoShop from './src/ProtoShop';
import './src/styles/protoshop.scss';


const container = document.createElement('div');
container.className = "protoshop";

document.querySelector('body').appendChild(container);

ReactDOM.render(ProtoShop, container);
