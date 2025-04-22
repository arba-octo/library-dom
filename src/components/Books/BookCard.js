function BookCard(props) {
    return (
        <div className="book__card">
            <div className="book__descript">
                <img className="book__descript-mainImg" src={props.faceImg} alt="Главное изображение"/>
                <div className="book__descript-content">
                    <p className="book__title">{props.title}</p>
                    <p className="book_author">{props.author}</p>
                    <table className="book__text-descript">
                        <tbody>
                        <tr>
                            <td>Серия</td>
                            <td>{props.collection}</td>
                        </tr>
                        <tr>
                            <td>Страниц</td>
                            <td>{props.pages}</td>
                        </tr>
                        <tr>
                            <td>Возраст</td>
                            <td>{props.age}</td>
                        </tr>
                        <tr>
                            <td>Для первого самост. чтения</td>
                            <td>{props.firstSelfReading === true ? 'да' : 'нет'}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default BookCard;