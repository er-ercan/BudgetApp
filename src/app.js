import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./styles/style.scss";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(setTextFilter('s'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById("app"));
