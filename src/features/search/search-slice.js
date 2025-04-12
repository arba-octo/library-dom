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
        setActiveFilter(state, { payload }) {
            console.log('payload (зашли в setActiveFilter) = ', payload);
            let set = new Set();
            set.add({ id: payload.id, value: payload.value });
            state.activeFilters = [...set]
        },
        setAgeAction: (state, action) => {
            state.age = action.payload;
        },
        setTitleAction: (state, action) => {
            state.title = action.payload;
            if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
        },
        setAuthorAction: (state, action) => {
            state.author = action.payload;
            if (!state.activeFilters.includes(action.payload)) {state.activeFilters.push(action.payload)}
        },
        changeValueAction: (state, { payload }) => {
            state[payload.id] = payload.value;
            /*if (action.payload.id === 'age') {
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
            }*/
        },
        removeFilterAction: (state, action) => {
            state[action.payload] = initialState[action.payload];
            state.activeFilters = state.activeFilters.filter((item) => item.id !== action.payload)
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
    clearAllFiltersAction,
    setActiveFilter,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectAge = (state) => state.search.age;
export const selectTitle = (state) => state.search.title;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters