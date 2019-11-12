import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

import authorizationUtils from "./utils/authorizationUtils";

/** Import containers here */
import ErrorComponent from "./containers/errors/ErrorComponent";
import QuotesComponent from "./containers/quotes/QuotesComponent";

const routes = state => {
  /* https://tylermcginnis.com/react-router-protected-routes-authentication/ */
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authorizationUtils.isLoggedIn(state) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }/>
  );

  return (
    <App>
      <Switch>
        <Route
          exact
          path="/quotes"
          component={QuotesComponent}
        />
        {/* Root Path */}
        <Route
          exact
          path="/"
          component={QuotesComponent} />
        {/* Error Handling Routes */}
        <Route
          component={ErrorComponent}
        />
      </Switch>
    </App>
  );
}

export default routes;
