import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    series: []
}

const seriesSlice = createSlice({
    name: "@@series",
    initialState,
    reducers: {
        setSeries: (state, action) => {
            state.series = action.payload;
        }
    }
});

export const {setSeries} = seriesSlice.actions;
export const seriesReducer = seriesSlice.reducer;
export const selectAllSeries = (state) => state.series.series;