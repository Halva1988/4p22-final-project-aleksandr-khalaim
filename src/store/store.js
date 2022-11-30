import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import basketReducer from './basket/basketSlice';
import productsSlice from "./products/productsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'products',
    storage,
}

const rootReducer = combineReducers({
    counter: counterReducer,
    basket: basketReducer,
    products: productsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)