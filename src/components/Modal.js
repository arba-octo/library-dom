import {useState} from "react";
import {Box, Typography} from "@mui/material";
import CopyComponent from "./CopyComponent";
import {Link} from "react-router-dom";



function Modal({ width }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
    };

    return (
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
    )
}