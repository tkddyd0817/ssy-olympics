
import MedalsReducer from '../redux/MedalsSlice'
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage"; // localStorage를 위한 storage 엔진
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";



const rootReducer = combineReducers({
    medals:MedalsReducer
})

const persistConfig = {
    key:'root',
    storage,
    whitelist:['medals'],
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const medalsStore = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[FLUSH,PAUSE,PURGE, REHYDRATE, PERSIST, REGISTER]
            }
        })
})


export const persistor = persistStore(medalsStore)