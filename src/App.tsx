import * as React from "react";

import Layout from "antd/lib/layout";

import Sider from "./modules/Sider";

import "./App.less";

class ProgressSummary extends React.Component {
  render() {
    return (
      <Layout className="ps__layout">
        <Sider />
        <Layout />
      </Layout>
    );
  }
}

export default ProgressSummary;
