import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BookCard from "./BookCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1030,
    bgcolor: '#EFEDED',
    borderRadius: '35px',
    p: 4,
};

function Book(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: '30px',
                        cursor: 'pointer',
                        bgcolor: '#F5F5F5',
                        borderRadius: '18px',
                        p: '0 5px 5px 5px'
                        }}
                     onClick={handleOpen}
                >
                    <img className="book__preview" src={props.previwImg} alt="Изображение"/>
                    <Box sx={{fontSize: '18px', color: '#020202', textAlign: 'center'}}>{props.title}</Box>
                    <Box sx={{fontSize: '16px', color: '#787878', textAlign: 'center'}}>{props.author}</Box>
                    <Box sx={{fontSize: '16px', color: '#787878', textAlign: 'center', mt: '5px'}}>{props.pages} стр.</Box>
                </Box>

            <Modal
                open={open}
                onClose={handleClose}
                //aria-labelledby="modal-modal-title"
                //aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BookCard
                        title={props.title}
                        author={props.author}
                        collection={props.collection}
                        pages={props.pages}
                        faceImg={props.faceImg}
                        age={props.age}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default Book;