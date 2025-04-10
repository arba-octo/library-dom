import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    age: [0, 18],
    title: '',
    author: ''
};

const filtersSlice = createSlice({
    name: "@@filters",
    initialState,
    reducers: {
        setAgeAction: (state, action) => {
            state.age = action.payload
        },
        /*setTitleAction: (state, action) => {
            state.title = action.payload
        },
        setAuthorAction: (state, action) => {
            state.author = action.payload
        },*/
        changeValueAction: (state, action) => {
            if (action.payload.id === 'title') {
                state.title = action.payload.value
            }
            if (action.payload.id === 'author') {
                state.author = action.payload.value
            }
        },
        clearFilterAction: () => initialState,
    },
});

export const {
    setAgeAction,
    changeValueAction,
    clearFiltersAction
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectAge = (state) => state.filters.age;
export const selectFilters = (state) => state.filters;
export const selectValue = (evt) => {
    if (evt.target.id === 'title') {
        return (state) => state.filters.title;
    }
    if (evt.target.id === 'author') {
        return (state) => state.filters.author;
    }
}
