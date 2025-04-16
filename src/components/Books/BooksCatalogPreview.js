import {dataBooks} from "../../data/data-books";
import Book from "./Book";

function BooksCatalogPreview() {
    return (
        <div className="books__catalog">
            {dataBooks.map((itemBook) => {
                return (
                        <Book
                            key={itemBook.id}
                            previwImg={itemBook.previwImg}
                            title={itemBook.title}
                            author={itemBook.author}
                            pages={itemBook.pages}
                        />
                    )
            })}
        </div>
    )
}
export default BooksCatalogPreview;