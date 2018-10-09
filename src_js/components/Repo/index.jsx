import React from "react";
import PropTypes from "prop-types";

import List from "antd/lib/list";
import Commit from "../Commit";

import { injectStore } from "../Store";

const styles = {
  list: {
    margin: "0",
  },
  repoContent: {
    height: "824px",
    overflowY: "scroll",
  },
};

const Repo = ({ store, repo }) => {
  const repoData = store.repos.get()[repo];
  const isLoading = store.loading.get();
  return (
    <div className={styles.repoContent}>
      {isLoading === false &&
        repoData.commits.length > 0 && (
          <List
            className={styles.list}
            dataSource={repoData.commits}
            renderItem={commit => <Commit commit={commit} />}
          />
        )}
      {isLoading === false && repoData.commits.length === 0 && <p>This repo is empty</p>}
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
};

export default injectStore(Repo);
