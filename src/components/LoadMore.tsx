// Logic
import * as React from "react";

// Presentation
import Button from "antd/lib/button";

import { sheet } from "../styles";

// Assets
const styles = sheet({
  loadMoreButton: {
    ta: "center",
    mart: "24px",
    marb: "24px",
    h: "32px",
    lh: "32px",
  },
});

// Types
type LoadMoreProps = {
  onLoadMore: React.MouseEventHandler<HTMLButtonElement>;
};

const LoadMore: React.FunctionComponent<LoadMoreProps> = ({ onLoadMore }) => (
  <div className={styles.loadMoreButton}>
    <Button onClick={onLoadMore}>Click here to load more!</Button>
  </div>
);

export default LoadMore;
