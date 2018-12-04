// Logic
import * as React from "react";

// Presentation
import Icon from "antd/lib/icon";

import { sheet } from "../styles";

// Assets
const styles = sheet({
  iconText: {
    marr: "8px",
  },
});

// Types
type IconTextProps = {
  type: string;
  text: string;
};

const IconText: React.FunctionComponent<IconTextProps> = ({ type, text }) => (
  <span>
    <Icon type={type} className={styles.iconText} />
    {text}
  </span>
);

export default IconText;
