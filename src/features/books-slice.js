import {createSlice} from "@reduxjs/toolkit";
import {dataBooks} from "../../data/data-books";

const booksSlice = createSlice({
    name: "@@books",
    initialState: dataBooks,
    reducers: {
        addBook: (state, action) => {
            if (!state.books.some(bookItem => bookItem.id === action.payload.id)) {
                state.books.concat(action.payload);
            };
        }
    }
});

export const {addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;