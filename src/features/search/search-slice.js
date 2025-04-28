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

const toDisplayBooks = (activeFilters) => {
    return dataBooks.filter((bookItem) => {
        return !activeFilters.some((filterItem) => {
            if (filterItem.id === "ageToFilter") {
                return !(bookItem.age[0] <= filterItem.value[1] && bookItem.age[1] >= filterItem.value[0]);
            }
            if (bookItem[filterItem.id] !== null) {return !bookItem[filterItem.id].toLowerCase().includes(filterItem.value.toLowerCase())}
            return true;
        });
    })
}

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        // Обрабатывает добавление и изменение значений активных фильтров на FilterPanel
        setFilter(state, { payload }) {
            if (!state.activeFilters.some(filterItem => filterItem.id === payload.id)) {
                state.activeFilters = state.activeFilters.concat(payload);
            } else {
                state.activeFilters = state.activeFilters.map(item => {
                    if (item.id === payload.id) {
                        return { ...item, value: payload.value };
                    }
                    return item;
                })
            }
            state.books = toDisplayBooks(state.activeFilters);
        },

        // Обрабатывает отображение value в поляз SideBarSearch
        changeValueAction: (state, { payload }) => {
            state[payload.id] = payload.value;
        },
        removeFilterAction: (state, action) => {
            state[action.payload.id] = initialState[action.payload.id];
            if (action.payload.id === "ageToFilter") {state.age = initialState.age; state.ageToFilter = initialState.ageToFilter};
            state.activeFilters = state.activeFilters.filter((item) => item.id !== action.payload.id);
            console.log('state.activeFilters = ', state.activeFilters);
            state.books = toDisplayBooks(state.activeFilters);
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
    setFilter,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectAge = (state) => state.search.age;
export const selectAgeToFilter = (state) => state.search.ageToFilter;
export const selectTitle = (state) => state.search.title;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters;
export const selectBooks = (state) => state.search.books;