import { configureStore } from '@reduxjs/toolkit';
import { ageChangeReducer } from './features/age/ageSlice';

export const store = configureStore({
    reducer: {
        age: ageChangeReducer,
    },
})