// Logic
import * as React from "react";

// Presentation
import Layout from "antd/lib/layout";

import { sheet } from "../styles";

// Assets
const styles = sheet({
  appFooter: {
    ta: "center",
  },
});

const Footer: React.FunctionComponent = () => (
  <Layout.Footer className={styles.appFooter}>©2018 Created by City Of Zion</Layout.Footer>
);

export default Footer;
