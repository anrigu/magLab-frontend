import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppV2 from "./AppV2";

ReactDOM.render(
  <BrowserRouter>
    <AppV2 />
  </BrowserRouter>,
  document.getElementById("root")
);
