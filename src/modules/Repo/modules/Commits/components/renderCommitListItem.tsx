// Logic
import * as React from "react";

// Presentation
import List from "antd/lib/list";
import Skeleton from "antd/lib/skeleton";

import { sheet } from "../../../../../styles";

// Assets
const styles = sheet({
  listItem: {
    pad: "16px",
  },
});

// TODO: add typings for item!
const renderRepoListItem = item => (
  <List.Item className={styles.listItem}>
    <Skeleton title={true} loading={item.loading} active={true}>
      <List.Item.Meta title={<a href={item.html_url}>{!item.loading && item.commit.message}</a>} />
      {!item.loading && item.author && <div>{item.author.login} committed</div>}
    </Skeleton>
  </List.Item>
);

export default renderRepoListItem;
