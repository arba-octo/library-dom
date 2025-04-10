import { configureStore } from '@reduxjs/toolkit';
import {filtersReducer} from "./features/filters-slice";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
})