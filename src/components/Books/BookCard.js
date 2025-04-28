import {useState} from "react";
import {useSelector} from "react-redux";
import {selectBooks} from "../../features/search/search-slice";

function BookCard(props) {
    const book = useSelector(selectBooks).find(bookItem => bookItem.id === props.id);
    const [mainImg, setMainImg] = useState(book.faceImg[1]);
    const handleClick = (type) => { setMainImg(type); console.log(mainImg) }

    return (
        <div className="book__card">
            <div className="book__descript">
                <div className="book_top">
                    <div className="book__descript-mainImg">
                        <img className="mainImg__img" src={mainImg} alt="Главное изображение"/>
                    </div>
                    <div className="book__descript-content">
                        <p className="book__title">{book.title}</p>
                        <p className="book_author">{book.author}</p>
                        <table className="book__text-descript">
                            <tbody>
                            <tr>
                                <td className="table__first-column">Серия</td>
                                <td>{book.collection}</td>
                            </tr>
                            <tr>
                                <td>Страниц</td>
                                <td>{book.pages}</td>
                            </tr>
                            <tr>
                                <td>Возраст</td>
                                <td>{book.age[0]} - {book.age[1]}</td>
                            </tr>
                            <tr>
                                <td>Статус</td>
                                <td>{book.statusFree === true ? 'свободна' : 'занята'}</td>
                            </tr>
                            {book.statusFree === false && <tr>
                                <td>Освободиться</td>
                                <td>04.02.2025</td>
                                ></tr>}
                            </tbody>
                        </table>
                        <div>Подходит для первого самостоятельного чтения: {book.firstSelfReading === true ? "ДА" : "НЕТ"}</div>
                    </div>
                </div>
                <hr className="line__section-separate" />
                <div className="book_bottom">
                    <img
                        className="book_face-preview"
                        src={book.faceImg[0]}
                        alt="обложка"
                        onClick={() => handleClick(book.faceImg[1])}
                    />
                    {book.tocImg[0] !== null && <img src={book.tocImg[0]} alt="оглавление" onClick={() => handleClick(book.tocImg[1])}/>}
                    <img
                        src={book.exampleImg[0]}
                        alt="разворот"
                        onClick={(exampleImg) => handleClick(book.exampleImg[1])}
                    />
                </div>
            </div>
        </div>
    )
}

export default BookCard;