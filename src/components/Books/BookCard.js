import {useSelector} from "react-redux";
import {selectBooks} from "../../features/search/search-slice";

function BookCard(props) {
    const book = useSelector(selectBooks).find(bookItem => bookItem.id === props.id);
    return (
        <div className="book__card">
            <div className="book__descript">
                <div className="book_top">
                    <img className="book__descript-mainImg" src={book.faceImg} alt="Главное изображение"/>
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
                                <td>{book.age}</td>
                            </tr>
                            <tr>
                                <td>Подходит для ПВЧ*</td>
                                <td>{book.firstSelfReading === true ? 'да' : 'нет'}</td>
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
                        <div>*Первое самостоятельное чтение</div>
                    </div>
                </div>
                <div className="book_bottom">
                    <img src={book.previwImg} alt="обложка"></img>
                    <img src={book.tocImgSmall} alt="оглавление"/>
                    <img src={book.exampleImgSmall} alt="разворот"/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default BookCard;