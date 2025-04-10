import BooksCatalogPreview from "./BooksCatalogPreview";

function Books() {
    return (
        <div className="books">
            <h2 className="books__title">Новые книги в каталоге: возраст 1 - 18 лет</h2>
            <BooksCatalogPreview />
        </div>
    )
}

export default Books;