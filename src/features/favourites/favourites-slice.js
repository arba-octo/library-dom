import {createSlice} from "@reduxjs/toolkit";


const favouritesSlice = createSlice({
    name: "@@favourites",
    initialState: [],
    reducers: {
        addFavourBook(state, { payload }) {
            if (!state.favourites.some(favItem => favItem.id === payload.id)) {
                return state.favourites.concat(payload);
            }
            return;
        },
        removeFavourites(state, { payload }) {

        }
    }
})
export const favouritesReducer = favouritesSlice.reducer;
export const {addFavourBook} = favouritesSlice.actions;