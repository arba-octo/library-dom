import BooksCatalogPreviw from "./BooksCatalogPreviw";

function Books() {
    return (
        <div className="books">
            <h2 className="books__title">Новые книги в каталоге: возраст 1 - 18 лет</h2>
            <BooksCatalogPreviw />
        </div>
    )
}

export default Books;