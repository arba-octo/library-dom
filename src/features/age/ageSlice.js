import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ageStart: 0,
    ageEnd: 18,
}
export const ageSlice = createSlice({
    name: '@@age',
    initialState,
    reducers: {
        changeAgeStartAction: (state, action) => {
            state.ageStart = action.payload;
        },
        changeAgeEndAction: (state, action) => {
            state.ageEnd = action.payload;
        },
    },
})
export const { changeAgeStartAction, changeAgeEndAction } = ageSlice.actions
export const { ageChangeReducer } = ageSlice.reducer