import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './assets/styles.scss';
import './assets/materialize.scss';
import VirtualMakeup from './components/VirtualMakeup';


console.log('Hello');

ReactDOM.render(<VirtualMakeup />, document.getElementById('app'));

