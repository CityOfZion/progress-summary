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
  async componentDidUpdate(prevProps) {
    const {
      store: { project, loading }
    } = this.props;
    const prevProject = prevProps.store.project.value;
    const currentProject = project.get();

    if (prevProject !== currentProject) {
      loading.set({
        currentProject,
        fetch: "repo"
      });
    }
  }

  render() {
    const { classes, store } = this.props;
    const isLoading = store.loading.get();
    return (
      <ConditionalSpinner isLoading={isLoading}>
        <div className={classes.appContent}>
          <h1 className={classes.title}>{store.project.get()}</h1>
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
