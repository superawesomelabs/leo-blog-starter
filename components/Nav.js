import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Nav.css';

export default class Navigation extends Component {
  render() {
    return (
      <Link to='/'>Home</Link>
      <Link to='/posts'>Posts</Link>
    )
  }
}
