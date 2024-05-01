import { createStore } from "redux";
import { persistedReducer } from "./reducers";
import { persistStore } from "redux-persist";

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
