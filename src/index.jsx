import * as React from 'react';
import { render } from 'react-dom';
import "jquery/dist/jquery.slim"

// import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import './scss/main.scss';
>>>>>>> 3248134c29f76f4a3cb3696a52bbf86fc0fec699

import './scss/main.scss';
import './style.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
