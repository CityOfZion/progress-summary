import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import { List, Avatar } from "antd";

import GITHUB_LOGO from "../../assets/github_logo.png";

const styles = {
  listItem: {
    paddingRight: "12px"
  }
};

const Commit = ({ classes, commit }) => {
  const committer = commit.committer || commit.commit.committer;
  return (
    <List.Item
      className={classes.listItem}
      // actions={[<a onClick={this.showDrawer}>View Info</a>]} // eslint:disable
      actions={[
        <a href={commit.html_url} target="_blank">
          View on Github
        </a>
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={committer.avatar_url || GITHUB_LOGO} />}
        title={
          <a href={committer.html_url}> {committer.login || committer.name}</a>
        }
        description={commit.commit.message}
      />
    </List.Item>
  );
}

Commit.propTypes = {
  classes: PropTypes.object.isRequired,
  commit: PropTypes.object.isRequired
};

export default injectSheet(styles)(Commit);
