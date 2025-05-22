import {createSlice} from "@reduxjs/toolkit";
import {newBooks} from '../data/new-books';

const initialState = {
    books: [],
}

const booksSlice = createSlice({
    name: "@@books",
    initialState,
    reducers: {
        // Выгружает в стейт все книги из БД, используется в BooksCatalogPreview
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        // Добавляет новую книгу из форма SideBar, используется в SideBarAddBook
        addBook: {
            reducer: (state, action) => {
                if (!state.books.some(bookItem => bookItem.id === action.payload.id)) {
                    state.books = state.books.concat(action.payload);
                }
            },
            prepare: (newBook) => ({
                payload: {
                    newBook,
                    id: newBook.id,
                    owner: "DanaArb"
                }
            })
        }
    }
});

export const {setBooks, addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
export const selectBooks = (state) => state.books.books;