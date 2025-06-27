import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFavourite } from "../features/favourites/favourites-slice";
import {Button, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CopyComponent from "./CopyComponent";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

function Favourite ({book}) {

    // Данные которые передаются на сервер и далее в телеграмм
    const dataBook = `Читать книгу: ${book.title} (${book.author})`;

    // Используется при удалении книги из Избранного
    const dispatch = useDispatch();

    // Состояние и его отслеживание для модального окна с запросом номер в Telegram
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleClickToRead = () => {setOpenModal(true)}

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
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Внимание!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Чтобы взять данную книгу на чтение,
                            {' '}
                            <CopyComponent data={dataBook} />
                            {' '}
                            её данные и отправьте в телеграмм-канал
                            {' '}
                            <Link
                                to="https://t.me/+WA1jwbcj6xlhMzli"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><button className="favourite__modal_button-text">БиблиоDom</button></Link>
                        </Typography>
                    </Box>
                </Modal>
        </div>
    )
}

export default Favourite;