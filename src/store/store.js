import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "../slice/AuthSlice";
import productsReducer from "../slice/ProductSlice";  // <-- import it
import cartReducer from "../slice/CartSlice";  // import it

// Persist ONLY the auth slice
const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productsReducer,   // <-- add products here
  cartitems: cartReducer,   // <-- add this
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
//