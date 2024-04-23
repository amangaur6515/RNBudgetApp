
import { createStore } from "redux";
import myReducer, { persistedReducer } from "./reducers";
import { persistStore } from "redux-persist";
import { createStoreHook } from "react-redux";

//const store=createStore(myReducer)
const store=createStore(persistedReducer)
const persistor=persistStore(store);
//export default store;

export { store, persistor };