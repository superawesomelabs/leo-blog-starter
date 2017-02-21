import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import styles from "./Home.css";

export default class Post extends Component {
  static fragments = {
    homepost: gql`
      fragment HomePost on BlogPost {
        attributes { title, slug, url, excerpt, timeToRead }
    }`
  };
  render() {
    const {
      title,
      date,
      excerpt,
      featuredImage,
      timeToRead,
      url
    } = this.props.post.attributes;
    return (
      <div>
        <Link to={url}><h4 className={styles.heading}>{title}</h4></Link>
        <span className={styles.meta}>{date} • {timeToRead} min read</span>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link to={url} className={styles.readMore}>Read more...</Link>
      </div>
    );
  }
}
