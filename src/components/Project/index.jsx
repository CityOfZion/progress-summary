import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import ConditionalSpinner from "../ConditionalSpinner";
import { injectStore } from "../Store";

const styles = {
  appContent: {
    padding: "24px",
    background: "#fff",
    minHeight: "360px"
  }
};

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
    const {
      store: { project, loading, repos }
    } = this.props;
    const prevProject = prevProps.store.project.value;
    const currentProject = project.get();

    if (prevProject !== currentProject) {
      repos.set({});
      loading.set({
        currentProject,
        fetch: "repo"
      });
      console.log(await fetch("https://api.github.com/orgs/neo-project/repos"));
    }
  }

  render() {
    const { classes, store } = this.props;
    const isLoading = store.loading.get();
    const project = store.project.get();
    const repos = store.repos.get();
    return (
      <ConditionalSpinner isLoading={isLoading}>
        <div className={classes.appContent}>
          <h1 className={classes.title}>{project}</h1>
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
