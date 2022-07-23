import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PageRoute from "./PageRoute";
import { AppProvider } from "./Components/Context";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <PageRoute />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
