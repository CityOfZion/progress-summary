import React from "react";
import PropTypes from "prop-types";

import Tabs from "antd/lib/tabs";
import ConditionalSpinner from "../ConditionalSpinner";
import Repo from "../Repo";

import { injectStore } from "../Store";
import fetchToken from "../../networking/fetchToken";
import fetchRepos from "../../networking/fetchRepos";
import fetchCommits from "../../networking/fetchCommits";

const styles = {
  appContent: {
    padding: "0",
    background: "#fff",
    height: "824px",
  },
  repoPane: {
    height: "824px",
  },
};

const ELLIPSIS = "...";
const trimRepoName = repo => repo.substring(0, 12) + ELLIPSIS;
const checkRepoName = repo => (repo.length <= 15 ? repo : trimRepoName(repo));

class Project extends React.Component {
  componentDidMount() {
    // init with neo-project repo
    const { store } = this.props;
    const project = store.project.get();
    if (project === "") {
      store.project.set("neo-project");
    }
  }

  async componentDidUpdate(prevProps) {
    const { store } = this.props;
    const prevProject = prevProps.store.project.value;

    if (prevProject !== store.project.get()) {
      await fetchToken(store);
      await fetchRepos(store);
      await fetchCommits(store);
      store.loading.set(false);
    }
  }

  render() {
    const { store } = this.props;
    const isLoading = store.loading.get();
    const repos = Object.keys(store.repos.get());
    return (
      <ConditionalSpinner isLoading={isLoading}>
        <div className={styles.appContent}>
          <Tabs
            className={styles.repoPane}
            tabPosition="left"
            size="small"
            onChange={index => store.repo.set(repos[index])}
          >
            {repos.map((repo, index) => (
              <Tabs.TabPane tab={checkRepoName(repo)} key={index.toString()}>
                <Repo repo={repo} />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </ConditionalSpinner>
    );
  }
}

Project.propTypes = {
  store: PropTypes.object.isRequired,
};

export default injectStore(Project);
