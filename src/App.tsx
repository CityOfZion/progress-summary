// Logic
import * as React from "react";

// Presentation
import Layout from "antd/lib/layout";
import { sheet } from "./styles";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modules from "./modules";

// Assets
const styles = sheet({
  appRoot: {
    minH: "100vh",
  },
});

const App: React.FunctionComponent = () => (
  <Layout className={styles.appRoot}>
    <Header />
    <Modules />
    <Footer />
  </Layout>
);

export default App;
