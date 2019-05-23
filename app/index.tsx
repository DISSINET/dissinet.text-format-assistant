import "./styles.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import Store from "./store";
import config from "/config";

window["store"] = new Store();

store.changeHtml(config.defaultInputHTML);

ReactDOM.render(
  React.createElement(App, { store: window["store"] }),
  document.getElementById("app")
);
