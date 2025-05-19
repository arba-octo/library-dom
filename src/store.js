import { configureStore } from '@reduxjs/toolkit';
import {searchReducer} from "./features/search/search-slice";
import {favouritesReducer} from './features/favourites/favourites-slice';
import {booksReducer} from "./features/books-slice";
import {seriesReducer} from "./features/series-slice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        books: booksReducer,
        series: seriesReducer,
        favourites: favouritesReducer,
    },
})