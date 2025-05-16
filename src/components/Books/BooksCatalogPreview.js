import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Book from "./Book";
import {selectBooks, setBooks} from "../../features/books-slice";
import {selectFilteredBooks, setFilteredBooks} from "../../features/search/search-slice";

function BooksCatalogPreview() {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks); // все книги из БД
    const fiteredBooks = useSelector(selectFilteredBooks);

    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then(res => res.json())
            .then((result) => {
                dispatch(setBooks(result));
                dispatch(setFilteredBooks(result));
            })
            .catch(err => console.log("Ошибка загрузка книг из базы данных:", err));
    }, [dispatch])

    if (fiteredBooks.length === 0) {
        return <div>Идет загрузка данных ...</div>;
    }
    return (
        <div className="books__catalog">
            {fiteredBooks.map((itemBook) => {
                return (
                    <Book
                        key={itemBook.id}
                        id={itemBook.id}
                    />
                )
            })}
        </div>
    )
}
export default BooksCatalogPreview;