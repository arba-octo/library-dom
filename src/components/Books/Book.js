function Book(props) {
    return (
        <div className="book">
            <img className="book__preview" src={props.previwImg} alt="Изображение"/>
            <p className="book__title">{props.title}</p>
            <p className="book__author">{props.author}</p>
            <p className="book__pages">{props.pages} стр.</p>
        </div>
    )
}
export default Book;