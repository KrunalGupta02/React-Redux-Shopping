import reducers from "./reducers/index";
import { legacy_createStore as createStore } from "redux";

const store = createStore(
  reducers,
  {}, // state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
