import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    age: [0, 18],
    ageToFilter: [0, 18], // Отделили от age, чтобы в фильтре панели фильтров изменения отображались только после отпускания мыши со слайдера
    title: '',
    author: '',
    activeFilters: [] // массив объектов, где каждый объект = фильтр для панели фильтров с id и value
};

const searchSlice = createSlice({
    name: "@@search",
    initialState,
    reducers: {
        setActiveFilter(state, { payload }) {
            state[payload.id] = payload.value; // Обновили значение у фильтра (если возраст то ageToFilter)
            const idx = state.activeFilters.findIndex(item => item.id === payload.id); // Ищем на панели фильтров есть ли уже такой фильтр
            if (idx === -1) {
                state.activeFilters = state.activeFilters.concat(payload)
            }
            console.log('state.activeFilters (на выходе setActiveFilter) = ', state.activeFilters)
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
            console.log('state.activeFilters (на выходе changeValueAction) = ', state.activeFilters)
        },
        removeFilterAction: (state, action) => {
            state[action.payload] = initialState[action.payload];
            console.log('action.payload (в removeFilterAction) = ', action.payload)
            if (action.payload === "ageToFilter") {console.log('Зашли в if в removeFilterAction'); state.age = initialState.age}
            state.activeFilters = state.activeFilters.filter((item) => item.id !== action.payload)
            console.log('state.activeFilters (на выходе removeFilterAction) = ', state.activeFilters)
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
export const selectAgeToFilter = (state) => state.search.ageToFilter;
export const selectTitle = (state) => state.search.title;
export const selectAuthor = (state) => state.search.author;
export const selectActiveFilters = (state) => state.search.activeFilters