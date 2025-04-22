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
    if (payload.id === "ageToFilter") {
        return state.books.filter((bookItem) => bookItem.age[0] <= payload.value[1] && bookItem.age[1] >= payload.value[0])
    }
    console.log('payload.type', payload.type)
    if (payload.type === "input-text") {
        return state.books.filter((bookItem) => bookItem[payload.id].toLowerCase().includes(payload.value.toLowerCase()));
    }
}

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        setActiveFilter(state, { payload }) {
            state[payload.id] = payload.value; // Обновили значение у фильтра (если возраст то ageToFilter)

            console.log(toDisplayBooks(state, payload));
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
            state[action.payload] = initialState[action.payload];
            if (action.payload === "ageToFilter") {state.age = initialState.age}
            state.activeFilters = state.activeFilters.filter((item) => item.id !== action.payload)
        },
        clearAllFiltersAction: (state, action) => {

            state.activeFilters.map((item) => {
                if (item.id === AGE_TO_FILTER) {state.age = initialState.age}
                state[item.id] = initialState[item.id]
            })
            state.activeFilters = initialState.activeFilters
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