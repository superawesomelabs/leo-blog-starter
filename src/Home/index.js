import React, { PropTypes } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Post from "./Post";

import styles from "./Home.css";

const HomeComponent = ({ data }) => {
  const { loading, root } = data;

  if (loading) {
    return <div>sah</div>;
  }

  return (
    <div>
      <div className={styles.postsWrapper}>
        <div className={styles.posts}>
          {root &&
            root.posts &&
            root.posts.edges.map(({ node }) => (
              <Post key={node.attributes.slug} post={node} />
            ))}
        </div>
      </div>
    </div>
  );
};

HomeComponent.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    root: PropTypes.object
  }).isRequired
};

const HomeQuery = gql`query HomeQuery {
        root {
          posts(first: 5) {
            pageInfo { hasNextPage }
            edges {
              node {
                ...HomePost
        attributes { title, slug, url, excerpt, timeToRead }
              }
            }
          }
        }
      }
${Post.fragments.homepost}`

export default graphql(HomeQuery)(HomeComponent);
