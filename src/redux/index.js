"use client";
import { configureStore } from '@reduxjs/toolkit'
import userTypeReducer from './slices/userslice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

// we are going to use session storage to persist our redux state
const persistConfig = {
    key: 'root',
    storage: storageSession,
}

// combine all the available reducer into one using combineReducers method from redux
const rootReducer = combineReducers({
    user: userTypeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)