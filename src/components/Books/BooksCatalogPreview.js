import Book from "./Book";
import {useSelector} from "react-redux";
import {selectBooks} from "../../features/search/search-slice";

function BooksCatalogPreview() {
    const books = useSelector(selectBooks);

    return (
        <div className="books__catalog">
            {books.map((itemBook) => {
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