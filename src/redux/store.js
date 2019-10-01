
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ weatherData: reducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => console.log("Store-subscribe", store.getState()));
console.log("Store-getState", store.getState())

export default store;