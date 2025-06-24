import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFavourite } from "../features/favourites/favourites-slice";
import {Button, Modal, Box, Typography, TextField} from "@mui/material";
import {Formik} from "formik";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// Отправляет данные (любые, приходят в props) на сервер, который их перенаправляет в Telegram
const sendToTelegram = (data) => {
    fetch("http://localhost:3001/send-to-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: JSON.stringify(data, null, 2) }),
    })
        .then(() => alert("Ваш запрос на книгу отправлен в Telegram-канал БиблиоDom!"));
};

function Favourite ({book}) {
    // локальное хранилище с номером телефона в telegram пользователя
    const [userTelegram, setUserTelegram] = useState("");

    // Данные которые передаются на сервер и далее в телеграмм
    const dataBook = {
    title: book.title,
    author: book.author,
    userPhone: userTelegram
    }

    // Используется при удалении книги из Избранного
    const dispatch = useDispatch();

    // Состояние и его отслеживание для модального окна с запросом номер в Telegram
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);

    // Отслеживает клик по кнопке "Читать", и если пользователь уже передал свой номер - сразу отправляет данные на сервер,
    // если нет, то открывает модальное окно с запросом телефона
    const handleClickToRead = () => {
        // Если в стейте userTelegram нет номера телефона пользователя, то открываем модальное окно и запрашиваем его
        if (userTelegram === "") { setOpenModal(true) } else { sendToTelegram(dataBook) }
    }

    return (
        <div className="favourite">
            <img src={book.faceImg[0]} className="favourite__book-img" alt="book"/>
            <div className="favourite__descript">
                <span className="favourite__descript_item">{book.title}</span>
                <span className="favourite__descript_item">{book.author}</span>
                <span className="favourite__descript_item">{book.series}</span>
                <div>
                    <Button type="submit" onClick={handleClickToRead} >Читать эту книгу!</Button>
                    <span>|</span>
                    <Button type="button" className="delete" onClick={() => {dispatch(removeFavourite(book))}}>Удалить</Button>
                </div>
            </div>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        sendToTelegram(dataBook);
                        setOpenModal(false);
                    }}>
                        <label id="phone">Введите Ваш номер телефона в формате +7-9**-***-**-**</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={userTelegram}
                            placeholder="Введите ваш номер"
                            onChange={(e) => setUserTelegram(e.target.value)}
                        />
                        <button type="submit">Отправить запрос на книгу с номером телефона</button>
                    </form>
                </Modal>

        </div>
    )
}

export default Favourite;