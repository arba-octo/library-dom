import Header from "../components/Header/Header";
import {useSelector} from "react-redux";
import {selectFavourites} from "../features/favourites/favourites-slice";
import Favourite from "../components/Favourite";
import {Box, Button, Modal, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import CopyComponent from "../components/CopyComponent";

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

function FavouritesPage() {
    const favourites = useSelector(selectFavourites); // получили массив с книгами из избранного (имеет поля title, author и все другие поля из БД)
    const dataBooks = favourites.reduce((acc, favourItem) => {
        return acc + `${favourItem.title} (${favourItem.author}); `;
    }, "Читать несколько книг: ");
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleClickToRead = () => {setOpenModal(true)};

    return (
        <div className="section">
            <Header />
            <div className="favour-content">
                <h2>Избранное</h2>
                <div className="favour-container">
                    {favourites.map(favourItem => (
                        <Favourite book={favourItem} key={favourItem.id} />
                    ))}
                </div>
                <Button variant="text" onClick={handleClickToRead} sx={{ mt: 5 }}>Читать все книги из избранного ({favourites.length})</Button>
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
                            Чтобы взять данные книги на чтение,
                            {' '}
                            <CopyComponent data={dataBooks} />
                            {' '}
                            их и затем вставьте (ctrl + V) в телеграмм-канале
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
        </div>
    )
}
export default FavouritesPage;