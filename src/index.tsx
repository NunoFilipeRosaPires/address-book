import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { RouteConfig } from "./routes/RouteConfig";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
