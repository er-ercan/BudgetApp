import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById("app"));
