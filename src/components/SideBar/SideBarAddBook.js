import {useEffect, useState} from "react";
import {Slider, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonGroup, Button, InputLabel, Select, MenuItem} from "@mui/material";
import SideBarInput from "./SideBarInput";
import {styles} from "../../data/mui-styles";
import {useDispatch} from "react-redux";
import {addBook} from "../../features/books-slice";

const marks = [
    {
        value: 6,
        label: '6 лет'
    },
    {
        value: 12,
        label: '12 лет'
    }
];
const initialState = {
    "id": null,
    "title": "",
    "author": "",
    "series": null,
    "pages": "",
    "age": [0, 18],
    "faceImg": "",
    "tocImg": "",
    "exampleImg": "",
    "statusFree": true,
    "occupiedTo": null,
    "owner": "",
    "user": null,
    "firstSelfReading": false,
    "comments": [],
    "checked": false
}

function SideBarAddBook({seriesFromBD}) {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState(initialState);
    const handleChange = (bookField, newdata) => {
        setNewBook({
            ...newBook,
            [bookField]: newdata,
        })
    };
    const handleClickClear = () => {
        setNewBook(initialState);
    }
    const handleAddBook = () => {
        // dispatch(addBook(newBook))
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => dispatch(addBook(data)))
        setNewBook(initialState);
    }

    return (
        <form className="side-bar__inputs side-bar__add-book-form" action="mailto:nevarus@yandex.ru">

            <div className="side-bar__slider">
                <Typography id="age" gutterBottom>
                    Возраст читателя
                </Typography>
                <Slider
                    aria-labelledby="add-book__age"
                    getAriaLabel={() => 'Возраст читателя'}
                    value={newBook.age}
                    onChange={(evt) => handleChange('age', evt.target.value)}
                    step={1}
                    min={0}
                    max={18}
                    sx={{color: styles.color.green}}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </div>

            <TextField
                id="add-book__author"
                variant="standard"
                label="Автор*"
                className="input-error"
                sx={{fontFamily: styles.font.fontFamily, placeholder: styles.font.fontFamily, fontSize: styles.font.fontSize.small}}
                value={newBook.author}
                minlength="2"
                maxlength="30"
                onChange={(evt) => handleChange('author', evt.target.value)}
                required
            />

            <TextField
                id="add-book__title"
                variant="standard"
                label="Название*"
                className="input-error"
                sx={{fontFamily: styles.font.fontFamily}}
                value={newBook.title}
                minlength="2"
                maxlength="30"
                onChange={(evt) => handleChange('title', evt.target.value)}
                required
            />

            <FormControl variant="standard" sx={{ mt: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Серия книг</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={newBook.series}
                    onChange={(evt) => handleChange('series', evt.target.value)}
                    label="Series"
                >
                    { seriesFromBD.map((item) => {
                        if (!item.shortName) {
                            return <MenuItem value={item.shortName}>{item.name}</MenuItem>
                        }
                        return <MenuItem value={item.name}>{item.name}</MenuItem>
                    }) }
                </Select>
            </FormControl>

            <TextField
                id="add-book__pages"
                variant="standard"
                label="Количество страниц*"
                sx={{fontFamily: styles.font.fontFamily}}
                value={newBook.pages}
                minlength="1"
                maxlength="4"
                className="input-error"
                onChange={(evt) => handleChange('pages', evt.target.value)}
                required
            />

            <label htmlFor="add-book__face-img" className="side-bar__label">Фото обложки*:</label>
            <SideBarInput
                id="add-book__face-img"
                name="add-book__face-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
                onChange={(evt) => handleChange('faceImg', evt.target.value)}
                required
            />
            <label htmlFor="add-book__toc-img" className="side-bar__label">Фото оглавления:</label>

            <SideBarInput
                id="add-book__toc-img"
                name="add-book__toc-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
                multiple
                required
            />

            <label htmlFor="add-book__examp-img" className="side-bar__label ">Фото разворота*:</label>
            <SideBarInput
                id="add-book__examp-img"
                name="add-book__examp-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
                required
            />

            <FormControl>
                <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{mt: '10px', fontSize: styles.font.fontSize.medium}}
                >Подходит для первого самостоятельного чтения?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={newBook.firstSelfReading}
                    name="radio-buttons-group"
                    sx={{display: "flex", flexDirection: "row", mt: '-10px'}}
                >
                    <FormControlLabel value={false} control={<Radio />} label="Нет" />
                    <FormControlLabel value={true} control={<Radio />} label="Да" />
                </RadioGroup>
            </FormControl>

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                    sx={{width: '50%', bgcolor: styles.color.green}}
                    onClick={handleAddBook}
                >
                    Добавить
                </Button>
                <Button
                    sx={{width: '50%', bgcolor: styles.color.greyDark}}
                    onClick={handleClickClear}
                >
                    Очистить
                </Button>
            </ButtonGroup>
        </form>
    )
}

export default SideBarAddBook;