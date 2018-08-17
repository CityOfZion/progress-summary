import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import { List } from "antd";
import Commit from "../Commit";

import { injectStore } from "../Store";

const styles = {
  list: {
    margin: "0"
  },
  repoContent: {
    height: "824px",
    overflowY: "scroll"
  }
};

const Repo = ({ classes, store, repo }) => {
  const repoData = store.repos.get()[repo];
  const isLoading = store.loading.get();
  return (
    <div className={classes.repoContent}>
      {isLoading === false &&
        repoData.commits.length > 0 && (
          <List
            className={classes.list}
            dataSource={repoData.commits}
            renderItem={commit => <Commit commit={commit} />}
          />
        )}
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
