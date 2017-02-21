import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import styles from "./Posts.css";

class PostsPage extends Component {
  render() {
    console.log(this.props.data);
    const { loading, data } = this.props;
    if (loading) {
      return <div>loading posts</div>;
    }
    const edges = this.props.data.root.posts.edges;
    return (
      <ul className={styles.container}>
        {edges.map(({ node }) => {
          const { title, excerpt, url, slug } = node.attributes;
          return (
            <li key={slug}>
              <h5><a href={url}>{title}</a></h5>
              <p>{excerpt}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default graphql(
  gql`
  query PostsPage {
    root {
        posts(first: 50) {
          pageInfo { hasNextPage }
          edges {
            node {
              attributes { slug, timeToRead, title, url, excerpt }
            }
          }
        }
      }
    }`
)(PostsPage);
