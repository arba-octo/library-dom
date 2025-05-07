import { configureStore } from '@reduxjs/toolkit';
import {searchReducer} from "./features/search/search-slice";
import {favouritesReducer} from './features/favourites/favourites-slice';


export const store = configureStore({
    reducer: {
        search: searchReducer,
        favourites: favouritesReducer,
    },
})