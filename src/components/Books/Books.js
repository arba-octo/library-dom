import BooksCatalogPreview from "./BooksCatalogPreview";
import FiltersPanel from "../FiltersPanel";
import {useState} from "react";
import {dataBooks} from "../../data/data-books";
import {useSelector} from "react-redux";
import {selectActiveFilters} from "../../features/search/search-slice";

function Books() {
    const activeFilters = useSelector(selectActiveFilters);
    const [books, setBooks] = useState(dataBooks);

    return (
        <div className="books">
            <h2 className="books__title">Книги в каталоге:</h2>
            <FiltersPanel />
            <BooksCatalogPreview />
        </div>
    )
}

export default Books;