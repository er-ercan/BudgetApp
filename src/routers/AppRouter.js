import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseCreatePage from "./../components/Create";
import ExpenseDashboardPage from "./../components/Dashboard";
import ExpenseHelpPage from "./../components/Help";
import ExpenseEditPage from "./../components/Edit";
import Header from "./../components/Header";
import NotFoundPage from "./../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />{" "}
        {/*exact default true */}
        <Route path="/create" component={ExpenseCreatePage} />
        <Route path="/edit" component={ExpenseEditPage} />
        <Route path="/help" component={ExpenseHelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
