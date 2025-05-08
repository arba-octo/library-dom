import {createSlice} from "@reduxjs/toolkit";
import {dataBooks} from "../../data/data-books";

const booksSlice = createSlice({
    name: "@@books",
    initialState: dataBooks,
    reducers: {
        addBook: (state, action) => {
            state.books.some(bookItem => bookItem.id === action.payload.id );
        }
    }
});

export const {addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;