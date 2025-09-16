// import { configureStore } from "@reduxjs/toolkit";
// import ProductReducer from "../slice/ProductSlice"
// import CartReducer from "../slice/CartSlice"

// import { combineReducers } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";


// let persistConfig = {
//     key:"root",
//     storage

// }
// let rootReducer = combineReducers({
//     products:ProductReducer,
//     cartitems:CartReducer  
// })
// let persistedReducer = persistReducer(persistConfig,rootReducer)

// export const store = configureStore({
//    reducer : persistedReducer
// })

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // ✅
// import ProductReducer from "../slice/ProductSlice";
// import CartReducer from "../slice/CartSlice";
// import AuthReducer from "../slice/AuthSlice";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage, // ✅ Correct storage
// };

// const rootReducer = combineReducers({
//   products: ProductReducer,
//   cartitems: CartReducer,
//   auth: AuthReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store); // ✅ export once


// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import ProductReducer from "../slice/ProductSlice";
// import CartReducer from "../slice/CartSlice";
// import AuthReducer from "../slice/AuthSlice";

// // ✅ Only auth slice persisted
// const authPersistConfig = {
//   key: "auth",
//   storage: AsyncStorage,
// };

// const rootReducer = combineReducers({
//   products: ProductReducer,   // ❌ not persisted
//   cartitems: CartReducer,     // ❌ not persisted
//   auth: persistReducer(authPersistConfig, AuthReducer), // ✅ persisted
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

// export const persistor = persistStore(store);


// store.js

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import authReducer from "../slice/AuthSlice"; // adjust path if needed

// // Persist ONLY the auth slice
// const authPersistConfig = {
//   key: "auth",
//   storage: AsyncStorage,
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

// export const persistor = persistStore(store);


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
