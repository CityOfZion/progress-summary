import React from "react";
import PropTypes from "prop-types";

import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Breadcrumb from "antd/lib/breadcrumb";
import Project from "../../components/Project";
import { injectStore } from "../../components/Store";

import NEOLOGO from "../../assets/logo.png";
import styles from "./styles";

const { Content, Footer, Sider } = Layout;

const projects = ["neo-project", "neo-ngd", "CityOfZion", "NewEconoLab", "NeoResearch"];

const renderFooter = () => (
  <Footer className={styles.footer}>©2018 Created by Jeroen Peeters for NGD</Footer>
);

const renderProjects = store =>
  projects.map((p, index) => (
    <Menu.Item key={`${index.toString()}`} onClick={() => store.project.set(p)}>
      {p}
    </Menu.Item>
  ));

const renderSider = ({ store }) => (
  <Sider className={styles.sider}>
    <div className={styles.logo}>
      <img className={styles.logoImg} src={NEOLOGO} alt="NEO logo" key="NEOLOGO" />
    </div>
    <Menu defaultSelectedKeys={["0"]} mode="inline">
      {renderProjects(store)}
    </Menu>
  </Sider>
);

renderSider.propTypes = {
  store: PropTypes.object.isRequired,
};

const App = ({ store }) => {
  const project = store.project.get();
  const repo = store.repo.get();
  return (
    <Layout className={styles.layout}>
      {renderSider({ styles, store })}
      <Layout>
        <Breadcrumb style={{ margin: "16px" }}>
          <Breadcrumb.Item>{project}</Breadcrumb.Item>
          <Breadcrumb.Item>{repo}</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ margin: "0 16px" }}>
          <Project />
        </Content>
        {renderFooter(styles)}
      </Layout>
    </Layout>
  );
};

App.propTypes = {
  styles: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default injectStore(App);
