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
        // Добавляет новую книгу из формы SideBar, используется в SideBarAddBook
        addBook: (state, action) => {
                const newBook = action.payload;
                console.log('newBook = ', newBook);
                if (!state.books.some(bookItem => bookItem.id === action.payload.id)) {
                    console.log('action.payload в addBook в booksSlice', action.payload);
                    state.books = state.books.concat(newBook);
                }
            }
        }
});

export const {setBooks, addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
export const selectBooks = (state) => state.books.books;