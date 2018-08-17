import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import { Tabs } from "antd";
import ConditionalSpinner from "../ConditionalSpinner";
import Repo from "../Repo";

import { injectStore } from "../Store";
import fetchRepos from "../../networking/fetchRepos";
import fetchCommits from "../../networking/fetchCommits";

const styles = {
  appContent: {
    padding: "24px",
    background: "#fff",
    height: "824px"
  },
  repoPane: {
    height: "720px"
  }
};

const ELLIPSIS = "...";
const trimRepoName = repo => repo.substring(0, 15) + ELLIPSIS;
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
      await fetchRepos(store);
      await fetchCommits(store);
      store.loading.set(false);
    }
  }

  render() {
    const { classes, store } = this.props;
    const isLoading = store.loading.get();
    const project = store.project.get();
    const repos = Object.keys(store.repos.get());
    return (
      <ConditionalSpinner isLoading={isLoading}>
        <div className={classes.appContent}>
          <h1 className={classes.title}>{project}</h1>
          <Tabs className={classes.repoPane} tabPosition="left" size="small">
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
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default injectSheet(styles)(injectStore(Project));
