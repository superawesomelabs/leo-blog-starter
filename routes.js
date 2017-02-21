/**
 * Normalize styles are first, so they end up first in the stylesheet
 */
import "normalize.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./src/Nav";
import Home from "./src/Home";
import Post from "./src/Post";
import Posts from "./src/Posts";
import styles from "./routes.css";

const App = ({ children, ...props }) => (
  <div>
    <Nav />
    <div>{children}</div>
  </div>
);

const NoMatch = () => <div>404</div>;

export default (
  <App>
    <Switch>
      <Route path="/posts" exact component={Posts} />
      <Route path="/:slug" exact component={Post} />
      <Route path="/" exact component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </App>
);
