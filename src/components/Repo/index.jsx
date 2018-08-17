import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import { Card } from "antd";

import { injectStore } from "../Store";

const styles = {
  card: {
    marginBottom: "16px"
  },
  repoContent: {
    height: "720px",
    overflowY: "scroll"
  }
};

const fetchAuthorData = ({ commit: { author } }) =>
  `Commit by ${author.name} on ${author.date}`;

const Repo = ({ classes, store, repo }) => {
  const repoData = store.repos.get()[repo];
  const isLoading = store.loading.get();
  return (
    <div className={classes.repoContent}>
      {isLoading === false &&
        repoData.commits.length > 0 &&
        repoData.commits.map(commit => (
          <Card
            className={classes.card}
            title={fetchAuthorData(commit)}
            key={commit.sha}
          >
            {commit.commit.message}
          </Card>
        ))}
      {isLoading === false &&
        repoData.commits.length === 0 && <p>This repo is empty</p>}
    </div>
  );
};

Repo.propTypes = {
  classes: PropTypes.object.isRequired,
  repo: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired
};

export default injectSheet(styles)(injectStore(Repo));
