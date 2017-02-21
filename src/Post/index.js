import Hero from "../Hero";
import React, { Component, PropTypes } from "react";
import gql from "graphql-tag";
import styles from "./Post.css";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
const debug = require("debug")("post");

const { bool, string } = PropTypes;

const PostComponent = ({ data }) => {
  const { root, loading } = data;

  if (!root || loading) return <div>No Post</div>;
  const { timeToRead, title } = root.post.attributes;
  return (
    <div className={styles.container}>
      <div className={styles.singleColumn}>
        <div>{/* date*/} · {timeToRead} minutes to read</div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: root.post.body }} />
      </div>
    </div>
  );
};

export default graphql(
  gql`query PostDetailPage($slug: String) {
     root {
       post(slug: $slug) {
         attributes { title, timeToRead }
         body
       }
     }
   }`,
  {
    options: ({ match }) => {

      if (match.params.slug) {
        return { variables: { slug: match.params.slug } };
      }
      throw new Error(`No slug for ${match}`);
    }
  }
)(PostComponent);
