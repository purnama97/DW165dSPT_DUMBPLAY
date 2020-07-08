import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "../reducers/users";
import songReducer from "../reducers/song";
import artistReducer from "../reducers/artist";
import transaksiReducer from "../reducers/transaksi";

// Global state
const reducers = combineReducers({
  user: userReducer,
  song:songReducer,
  artist:artistReducer,
  transaksi:transaksiReducer
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;