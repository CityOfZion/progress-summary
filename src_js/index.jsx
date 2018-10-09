import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import App from "views/App";
import { StoreProvider } from "./components/Store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
