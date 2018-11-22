import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/style.scss';
import 'normalize.css/normalize.css'
import { SIGQUIT } from 'constants';

const ExpenseDashboardPage = () => (
	<div>
		Dashboard Page
	</div>
);

const ExpenseCreatePage = () => (
	<div>
		Expense Create Page
	</div>
);

const ExpenseEditPage = () => (
	<div>
		Expense Edit Page welcome
	</div>
);

const ExpenseHelpPage = () => (
	<div>
		Expense Help Page Welcome
	</div>
);

const NotFoundPage = () => (
	<div>
		404 Not Found
	</div>
);

const routes = (
	<BrowserRouter>
		<Switch>
		<Route exact path='/' component={ExpenseDashboardPage} />  {/*exact default true */}
		<Route path='/create' component={ExpenseCreatePage} />
		<Route path='/edit' component={ExpenseEditPage} />
		<Route path='/help' component={ExpenseHelpPage} />
		<Route component={NotFoundPage} />
		</Switch>
	
	</BrowserRouter>
);

ReactDOM.render(
	routes, document.getElementById("app"));
