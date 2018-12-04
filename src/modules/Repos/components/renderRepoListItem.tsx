// Logic
import * as React from "react";

// Presentation
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import List from "antd/lib/list";
import Skeleton from "antd/lib/skeleton";

import { sheet } from "../../../styles";

// Components
import IconText from "../../../components/IconText";

// Assets
const styles = sheet({
  listItem: {
    pad: "16px",
  },
  buttonContainer: {
    h: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

// TODO: add typings for item!
const renderRepoListItem = (setRepo: Function) => item => (
  <List.Item
    className={styles.listItem}
    actions={
      item.loading
        ? [
            <IconText key="stars" type="star-o" text="Stars" />,
            <IconText key="open-issues" type="exclamation-circle" text="Open issues" />,
            <IconText key="language" type="code" text="Language" />,
            <IconText key="license" type="file-text" text="License" />,
          ]
        : [
            <a key="stars" href={item.stargazers_url}>
              <IconText type="star-o" text={item.stargazers_count} />
            </a>,
            <IconText key="open-issues" type="exclamation-circle" text={item.open_issues_count} />,
            <IconText key="language" type="code" text={item.language || "No language detected"} />,
            <IconText key="license" type="file-text" text={item.license ? item.license.name : "No license present"} />,
          ]
    }
    extra={
      item.loading ? null : (
        <div className={styles.buttonContainer}>
          <Button type="primary" size="small" onClick={setRepo(item.name, item.default_branch)}>
            See progress <Icon type="right" />
          </Button>
        </div>
      )
    }
  >
    <Skeleton title={true} loading={item.loading} active={true}>
      <List.Item.Meta title={<a href={item.html_url}>{item.name}</a>} description={item.description} />
    </Skeleton>
  </List.Item>
);

export default renderRepoListItem;
