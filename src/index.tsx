import * as React from "react";
import * as ReactDOM from "react-dom";
import StoreProvider from "react-ion-store";

import App from "./App";
import * as ionStore from "./store";

ReactDOM.render(
  <StoreProvider {...ionStore}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
