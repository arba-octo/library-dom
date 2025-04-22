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
                            previwImg={itemBook.previwImg}
                            title={itemBook.title}
                            author={itemBook.author}
                            pages={itemBook.pages}
                            collection={itemBook.collection}
                            faceImg={itemBook.faceImg}
                            age={itemBook.age}
                            firstSelfReading={itemBook.firstSelfReading}
                            statusFree={itemBook.statusFree}
                            occupiedTo={itemBook.occupiedTo}
                            owner={itemBook.owner}
                        />
                    )
            })}
        </div>
    )
}
export default BooksCatalogPreview;