import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from "@/store/slices/counterSlice";
import userReducer from "@/store/slices/userSlice";
import sidebarReducer from "@/store/slices/sidebarSlice";

// 1. Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  sidebar: sidebarReducer,
});

// 2. Create persist config
const persistConfig = {
  key: 'root',
  storage,
};

// 3. Wrap combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Pass persisted reducer to the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // or ignore specific redux-persist actions
    }),
});

export const persistor = persistStore(store);
export default store;
