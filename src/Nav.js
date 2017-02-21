import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.css";

export default class Navigation extends Component {
  render() {
    return (
      <ul>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/posts" exact>Posts</NavLink>
      </ul>
    );
  }
}
