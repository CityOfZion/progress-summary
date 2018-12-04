// Logic
import * as React from "react";

// Presentation
import Layout from "antd/lib/layout";

import { sheet } from "../styles";

// Assets
import NeoLogo from "./NeoLogo";

const styles = sheet({
  appHeader: {
    bgc: "white",
  },
});

const Header: React.FunctionComponent = () => (
  <Layout.Header className={styles.appHeader}>
    <NeoLogo />
  </Layout.Header>
);

export default Header;
