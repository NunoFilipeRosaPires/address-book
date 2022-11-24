import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { RouteConfig } from "./routes/RouteConfig";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
