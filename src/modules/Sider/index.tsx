import * as React from "react";
import { compose } from "recompose";
import { withStore, withTake } from "react-ion-store";

import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";

import "./styles.less";

interface SiderProps {
  projects: string[];
}

const NEOLOGO = require("../../assets/logo.png");

const Sider: React.StatelessComponent<any> = ({ projects }: SiderProps) => {
  return (
    <Layout.Sider className="ps__sider">
      <div className="ps__sider__logo">
        <img src={NEOLOGO} alt="NEO logo" key="NEOLOGO" />
      </div>
      <Menu defaultSelectedKeys={["0"]} mode="inline">
        {projects.map((project: string, index: number) => (
          <Menu.Item key={index.toString()}>{project}</Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default compose(
  withStore,
  withTake("projects")
)(Sider);
