import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import { Layout, Menu } from "antd";
import Project from "../../components/Project";
import { injectStore } from "../../components/Store";

import NEOLOGO from "../../assets/logo.png";
import styles from "./styles";

const { Content, Footer, Sider } = Layout;

const projects = [
  "neo-project",
  "neo-ngd",
  "CityOfZion",
  "NewEconoLab",
  "NeoResearch"
];

const renderFooter = classes => (
  <Footer className={classes.footer}>
    ©2018 Created by Jeroen Peeters for NGD
  </Footer>
);

const renderProjects = store =>
  projects.map((p, index) => (
    <Menu.Item key={`${index.toString()}`} onClick={() => store.project.set(p)}>
      {p}
    </Menu.Item>
  ));

const renderSider = ({ classes, store }) => (
  <Sider className={classes.sider}>
    <div className={classes.logo}>
      <img
        className={classes.logoImg}
        src={NEOLOGO}
        alt="NEO logo"
        key="NEOLOGO"
      />
    </div>
    <Menu defaultSelectedKeys={["0"]} mode="inline">
      {renderProjects(store)}
    </Menu>
  </Sider>
);

renderSider.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const App = ({ classes, store }) => {
  return (
    <Layout className={classes.layout}>
      {renderSider({ classes, store })}
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Project />
        </Content>
        {renderFooter(classes)}
      </Layout>
    </Layout>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default injectSheet(styles)(injectStore(App));
