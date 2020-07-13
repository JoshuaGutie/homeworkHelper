import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Create from "./components/Create";
import Play from "./components/Play";
import View from "./components/View";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Game from "./components/Game";


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1200} classNames="my-node">
            <Switch location={location}>
              <Route path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Dashboard} />
              <ProtectedRoute path="/create" component={Create} />
              <ProtectedRoute path="/play" component={Play} />
              <ProtectedRoute path="/view/:id" component={View} />
              //add id to game later
              <ProtectedRoute path="/game/" component={Game} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Router;
