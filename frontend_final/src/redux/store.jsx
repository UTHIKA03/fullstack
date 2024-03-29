// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// // Create the Redux store
// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import authSlice from "./authSlice";

const rootReducer =combineReducers({
    auth:authSlice
})

const persistConfig={
    key:'root',
    storage: storageSession
}

const persistedReducer =persistReducer(persistConfig,rootReducer);

const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    })
})

export const persistor =persistStore(store);
export default store;