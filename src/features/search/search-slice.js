import {createSlice} from "@reduxjs/toolkit";
import {AGE_TO_FILTER} from "../../data/constants";
import {dataBooks} from "../../data/data-books";

export const initialState = {
    age: [0, 18],
    ageToFilter: [0, 18], // Отделили от age, чтобы в фильтре панели фильтров изменения отображались только после отпускания мыши со слайдера
    title: '',
    author: '',
    activeFilters: [], // массив объектов, где каждый объект = фильтр для панели фильтров с id и value
    books: dataBooks
};

const toDisplayBooks = (state, payload) => {
    return state.books = dataBooks.filter((bookItem) => {
        return !state.activeFilters.some((filterItem) => {
            if (payload.id === "ageToFilter") { return !(bookItem.age[0] <= payload.value[1] && bookItem.age[1] >= payload.value[0]) }
            if (bookItem[payload.id] !== null) {return !bookItem[payload.id].toLowerCase().includes(payload.value.toLowerCase())}
            return false;
        });
    })
}

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        setActiveFilter(state, { payload }) {
            state[payload.id] = payload.value; // Обновили значение у фильтра (если возраст то ageToFilter)
            state.books = toDisplayBooks(state, payload);
            const idx = state.activeFilters.findIndex(item => item.id === payload.id); // Ищем на панели фильтров есть ли уже такой фильтр
            if (idx === -1) {
                if (payload.value !== '') {
                    state.activeFilters = state.activeFilters.concat(payload)
                }
                toDisplayBooks(state, payload);
            }
        },
        changeValueAction: (state, { payload }) => {
            state[payload.id] = payload.value;
        },
        removeFilterAction: (state, action) => {
            state[action.payload.id] = initialState[action.payload.id];
            if (action.payload.id === "ageToFilter") {state.age = initialState.age};
            state.activeFilters = state.activeFilters.filter((item) => item.id !== action.payload.id);
            state.books = dataBooks.filter((bookItem) => {
                return state.activeFilters.map((filterItem) => {
                    if (filterItem.type === "input-text") { return bookItem[filterItem.id].includes(filterItem.value) };
                    return bookItem.age[0] <= filterItem.value[1] && bookItem.age[1] >= filterItem.value[0]
                });
            });
        },
        clearAllFiltersAction: (state, action) => {
            state.activeFilters.map((item) => {
                if (item.id === AGE_TO_FILTER) {state.age = initialState.age}
                state[item.id] = initialState[item.id]
            })
            state.activeFilters = initialState.activeFilters;
            state.books = dataBooks;
        }
    },
});

export const {
    setAgeAction,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction,
    setActiveFilter,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectAge = (state) => state.search.age;
export const selectAgeToFilter = (state) => state.search.ageToFilter;
export const selectTitle = (state) => state.search.title;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters;
export const selectBooks = (state) => state.search.books;