import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import user from "./user";

const rootReducer = combineReducers({
    user: user
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: true,
        })
})

export default store;