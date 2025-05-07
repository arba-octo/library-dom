import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectBooks} from "../../features/search/search-slice";
import {Box, ButtonGroup, Button, createTheme} from "@mui/material";
import {addFavourBook} from "../../features/favourites/favourites-slice";

/*const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});*/

function BookCard(props) {
    const dispatch = useDispatch();
    const book = useSelector(selectBooks).find(bookItem => bookItem.id === props.id);
    const [mainImg, setMainImg] = useState(book.faceImg[1]);
    const handleClickToChangeImg = (type) => { setMainImg(type) };
    const [comments, setComments] = useState(false);
    const handleClickToView = () => {
        setComments(!comments);
    }

    return (
        <div className="book__card">
            <div className="book__descript">
                <div className="book_top">
                    <div className="book__descript-mainImg">
                        <img className="mainImg__img" src={mainImg} alt="Главное изображение"/>
                    </div>
                    <div className="book__descript-content">
                        <div className="book__text">
                            <p className="book__title">{book.title}</p>
                            <p className="book_author">{book.author}</p>
                            <table className="book__text-descript">
                                <tbody>
                                <tr>
                                    <td className="table__first-column">Серия</td>
                                    <td>{book.series}</td>
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
                                </tr>}
                                <tr>
                                    <td>Владелец книги</td>
                                    <td>{book.owner}</td>
                                </tr>
                                <tr>
                                    <td>
                                       <button className="book__comments" onClick={handleClickToView}>Отзывы ({book.comments.length})</button>
                                        {comments && book.comments.map((commentItem) => {
                                            return <div>{commentItem.user}: {commentItem.text}</div>
                                        })}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Подходит для первого самостоятельного чтения: {book.firstSelfReading === true ? "ДА" : "НЕТ"}</p>
                        </div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > *': {
                                    m: 0,
                                },

                            }}
                        >
                            <ButtonGroup variant="text" aria-label="Basic button group">
                                <Button onClick={() => dispatch(addFavourBook(book))}>Добавить в Избранное</Button>
                                <Button>Взять книгу</Button>
                            </ButtonGroup>
                        </Box>
                    </div>
                </div>
                <hr className="line__section-separate" />
                <div className="book_bottom">
                    <img
                        className="book_face-preview"
                        src={book.faceImg[0]}
                        alt="обложка"
                        onClick={() => handleClickToChangeImg(book.faceImg[1])}
                    />
                    {book.tocImg[0] !== null && book.tocImg[0].map((imgSmallItem) => {
                        const idx = book.tocImg[0].indexOf(imgSmallItem);
                        return <img src={imgSmallItem} alt="оглавление"
                                    onClick={() => handleClickToChangeImg(book.tocImg[1][idx])}/>
                    })}
                    <img
                        src={book.exampleImg[0]}
                        alt="разворот"
                        onClick={() => handleClickToChangeImg(book.exampleImg[1])}
                    />
                </div>
            </div>
        </div>
    )
}

export default BookCard;