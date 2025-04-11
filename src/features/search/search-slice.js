import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    age: [0, 18],
    title: '',
    author: '',
    activeFilters: []
};

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        setAgeAction: (state, action) => {
            state.age = action.payload;
            console.log('action.payload в setAgeAction = ', action.payload)
            if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
            console.log('activeFilters в setAgeAction (после push фильтра) = ', state.activeFilters)
        },
        setTitleAction: (state, action) => {
            state.title = action.payload;
            if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
        },
        setAuthorAction: (state, action) => {
            state.author = action.payload;
            if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
        },
        changeValueAction: (state, action) => {
            if (action.payload.id === 'age') {
                state.age = action.payload.value;
                if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
            }
            if (action.payload.id === 'title') {
                state.title = action.payload.value;
                if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
            }
            if (action.payload.id === 'author') {
                state.author = action.payload.value;
                if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
            }
        },
        removeFilterAction: (state, action) => {
            if (action.payload.id === 'age') {
                state.age = initialState.age;
                state.activeFilters = state.activeFilters.filter((item) => item.id !== "age")
            }
            if (action.payload.id === 'title') {
                state.title = initialState.title;
                state.activeFilters = state.activeFilters.filter((item) => item.id !== "title")
            }
            if (action.payload.id === 'author') {
                state.author = initialState.author
                state.activeFilters = state.activeFilters.filter((item) => item.id !== "author")
            }
        },
        clearAllFiltersAction: (state, action) => {
            state.activeFilters = initialState.activeFilters
        }
    },
});

export const {
    setAgeAction,
    setTitleAction,
    setAuthorAction,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectAge = (state) => state.search.age;
export const selectTitle = (state) => state.search.title;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters