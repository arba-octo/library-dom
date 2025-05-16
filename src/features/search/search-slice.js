import {createSlice} from "@reduxjs/toolkit";
import {AGE_TO_FILTER} from "../../data/constants";

export const initialState = {
    age: [0, 18],
    ageToFilter: [0, 18], // Отделили от age, чтобы в фильтре панели фильтров изменения отображались только после отпускания мыши со слайдера
    title: '',
    author: '',
    series: '',
    activeFilters: [], // массив объектов (фильтров), где каждый объект = фильтр для панели фильтров с id и value
    filteredBooks: [], // массив отображаемых с учетом активных фильтров книг
    search: '', // строка поиска в Header
};

const toDisplayBooks = (activeFilters, books) => {
    return books.filter((bookItem) => {
        return !activeFilters.some((filterItem) => {
            if (filterItem.id === "ageToFilter") {
                return !(bookItem.age[0] <= filterItem.value[1] && bookItem.age[1] >= filterItem.value[0]);
            }
            if (bookItem[filterItem.id] !== null) {return !bookItem[filterItem.id].toLowerCase().includes(filterItem.value.toLowerCase())}
            return true;
        });
    })
};
const toDisplayBooksBySearch = (value, books) => {
  return books.filter((bookItem) => {
      if (bookItem.author) {
          return bookItem.title.toLowerCase().includes(value.toLowerCase()) || bookItem.author.toLowerCase().includes(value.toLowerCase());
      } else {return bookItem.title.toLowerCase().includes(value.toLowerCase())}

  })
};

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        //
        setFilteredBooks: (state, action) => {
            state.filteredBooks = action.payload;
        },
        // Обрабатывает добавление и изменение значений активных фильтров на FilterPanel, используется в SideBarSearch
        setFilter(state, { payload }) {
            if (!state.activeFilters.some(filterItem => filterItem.id === payload.id) && payload.value !== "") {
                state.activeFilters = state.activeFilters.concat(payload);
            } else {
                state.activeFilters = state.activeFilters.map(item => {
                    if (item.id === payload.id) {
                        return { ...item, value: payload.value };
                    }
                    return item;
                })
            }
            state.filteredBooks = toDisplayBooks(state.activeFilters, payload.books);
        },
        // Обрабатывает отображение книг в соответствии с заданным value поиска. Используется в Header (поиск)
        setSearch(state, { payload }) {
            state.filteredBooks = toDisplayBooksBySearch(payload.search, payload.books);
        },
        // Обрабатывает отображение value в поляз SideBarSearch
        changeValueAction: (state, { payload }) => {
            state[payload.id] = payload.value;
        },
        removeFilterAction: (state, { payload }) => {
            console.log(payload)
            state[payload.currentFilter.id] = initialState[payload.currentFilter.id];
            if (payload.currentFilter.id === "ageToFilter") {state.age = initialState.age; state.ageToFilter = initialState.ageToFilter};
            state.activeFilters = state.activeFilters.filter((item) => item.id !== payload.currentFilter.id);
            state.filteredBooks = toDisplayBooks(state.activeFilters, payload.books);
        },
        clearAllFiltersAction: (state, action) => {
            state.activeFilters.map((item) => {
                if (item.id === AGE_TO_FILTER) {state.age = initialState.age}
                state[item.id] = initialState[item.id]
            })
            state.activeFilters = initialState.activeFilters;
            state.filteredBooks = action.payload;
        }
    },
});

export const {
    setFilteredBooks,
    setFilter,
    setSearch,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectAge = (state) => state.search.age;
export const selectAgeToFilter = (state) => state.search.ageToFilter;
export const selectTitle = (state) => state.search.title;
export const selectSeries = (state) => state.search.series;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters;
export const selectFilteredBooks = (state) => state.search.filteredBooks;
export const selectSearch = (state) => state.search.search;