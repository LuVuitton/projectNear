import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers"; //не указ назв т.к. исп index
import initialState from "./store";

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
