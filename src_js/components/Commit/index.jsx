import React from "react";
import PropTypes from "prop-types";

import { Item } from "antd/lib/list";
import Avatar from "antd/lib/avatar";

import GITHUB_LOGO from "../../assets/github_logo.png";

const styles = {
  listItem: {
    paddingRight: "12px",
  },
};

const Commit = ({ commit }) => {
  const committer = commit.committer || commit.commit.committer;
  return (
    <Item
      className={styles.listItem}
      // actions={[<a onClick={this.showDrawer}>View Info</a>]} // eslint:disable
      actions={[
        <a href={commit.html_url} target="_blank">
          View on Github
        </a>,
      ]}
    >
      <Item.Meta
        avatar={<Avatar src={committer.avatar_url || GITHUB_LOGO} />}
        title={<a href={committer.html_url}> {committer.login || committer.name}</a>}
        description={commit.commit.message}
      />
    </Item>
  );
};

Commit.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default Commit;
