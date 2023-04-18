import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* We put provider so that all childeren have access to state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
