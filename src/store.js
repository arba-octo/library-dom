import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {searchReducer} from "./features/search/search-slice";
import {favouritesReducer} from './features/favourites/favourites-slice';
import {booksReducer} from "./features/books-slice";
import {seriesReducer} from "./features/series-slice";
import {usersReducer} from "./features/users-slice";
import {modalReducer} from "./features/modal-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites'],
};
const persistedReducer = persistReducer(persistConfig, favouritesReducer);

export const store = configureStore({
    reducer: {
        search: searchReducer,
        books: booksReducer,
        series: seriesReducer,
        users: usersReducer,
        favourites: persistedReducer,
        modal: modalReducer,
    },
})

export const persistor = persistStore(store);