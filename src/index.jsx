import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { create as createJss } from "jss";
import camelCase from "jss-camel-case";
import globalStyles from "jss-global";
import vendorPrefixer from "jss-vendor-prefixer";
import { JssProvider } from "react-jss";

import "antd/dist/antd.css";

import App from "./views/App";
import { StoreProvider } from "./components/Store";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

ReactDOM.render(
  <StoreProvider>
    <JssProvider jss={jss}>
      <App />
    </JssProvider>
  </StoreProvider>,
  document.getElementById("root")
);
