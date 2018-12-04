// Logic imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import StoreProvider from "react-ion-store";

// Components
import App from "./App";

// Assets
import { store, staticKeys } from "./store";

ReactDOM.render(
  <StoreProvider store={store} staticKeys={staticKeys}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
