import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFavourite } from "../features/favourites/favourites-slice";
import {Button, Modal, Box, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CopyDataBlock({ data }) {
    const [copied, setCopied] = useState(false);
    console.log('data = ', data);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            alert('Ошибка копирования');
        }
    };

    return (
        <button onClick={handleCopy} className="favourite__modal_button-text">
                {copied ? 'скопировано!' : 'скопируйте'}
        </button>
    );
}

function Favourite ({book}) {

    // Данные которые копируются для передачи в телеграмм
    const dataBook = `Читать: ${book.title} (${book.author})`;

    // Используется при удалении книги из Избранного
    const dispatch = useDispatch();

    // Состояние и его отслеживание для модального окна с переходом в Telegram
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleClickToRead = () => {
        setOpenModal(true)
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
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Внимание!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Чтобы забрать книгу для чтения,
                            {' '}
                            <CopyDataBlock data={dataBook} />
                            {' '}
                             ее данные и отправьте в telegram-канал
                            <a
                                href="https://t.me/+WA1jwbcj6xlhMzli"
                                target="_blank"
                                rel="noopener noreferrer"
                            >   {' '}
                                 <button className="favourite__modal_button-text">БиблиоDom</button>
                            </a>
                        </Typography>
                    </Box>
                </Modal>
        </div>
    )
}

export default Favourite;