
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const saveState = (state) => {
  try {
      const serialisedState = JSON.stringify(state);

      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
  }
};

const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');

      if (!serialisedState) return undefined;
      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};
const oldState = loadState();

const store = createStore(
  combineReducers({ weatherData: reducer }),
  oldState,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => console.log("Store-subscribe", store.getState()));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;