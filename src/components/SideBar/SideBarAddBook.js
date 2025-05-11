import {useState} from "react";
import {Slider, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonGroup, Button} from "@mui/material";
import SideBarInput from "./SideBarInput";
import {styles} from "../../data/mui-styles";

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
    author: "",
    title: "",
    age: [0, 18],
    series: null,
    pages: "",
    faceImg: ["", ""],
    tocImg: [[""], [""]],
    exampleImg: ["", ""],
    statusFree: true,
    occupiedTo: null,
    owner: "",
    user: null,
    firstSelfReading: false,
    comments: []
}

function SideBarAddBook() {
    // Отображение данных набираемых в полях input типа text и number
    const [value, setValue] = useState(initialState);
    const handleChange = (field, newdata) => {
        setValue({
            ...value,
            [field]: newdata,
        })
    };
    const handleClickAddBook = () => {
        const newBook = {
            title: value.title,
            author: value.author,
            age: value.age,
            series: value.series,
            pages: value.pages,
            faceImg: value.faceImg,
            tocImg: [value.tocImg],
            exampleImg: value.exampleImg,
            statusFree: true,
            occupiedTo: null,
            owner: "",
            firstSelfReading: false,
            comments: []
        }
    };
    const handleClickClear = () => {
        setValue(initialState);
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
                    value={value.age}
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
                sx={{fontFamily: styles.font.fontFamily, placeholder: styles.font.fontFamily, fontSize: styles.font.fontSize.small}}
                value={value.author}
                onChange={(evt) => handleChange('author', evt.target.value)}
            />
            <TextField
                id="add-book__collection"
                variant="standard"
                label="Название*"
                sx={{fontFamily: styles.font.fontFamily}}
                value={value.title}
                onChange={(evt) => handleChange('title', evt.target.value)}
            />
            <TextField
                id="add-book__collection"
                variant="standard"
                label="Серия книг"
                sx={{fontFamily: styles.font.fontFamily, fontSize: styles.font.fontSize.medium}}
                value={value.collection}
                onChange={(evt) => handleChange('collection', evt.target.value)}
            />
            <TextField
                id="add-book__pages"
                variant="standard"
                label="Количество страниц*"
                sx={{fontFamily: styles.font.fontFamily}}
                value={value.pages}
                onChange={(evt) => handleChange('pages', evt.target.value)}
            />
            <label htmlFor="add-book__face-img" className="side-bar__label">Фото обложки*:</label>
            <SideBarInput
                id="add-book__face-img"
                name="add-book__face-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
            />
            <label htmlFor="add-book__toc-img" className="side-bar__label">Фото оглавления:</label>
            <SideBarInput
                id="add-book__toc-img"
                name="add-book__toc-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
            />
            <label htmlFor="add-book__examp-img" className="side-bar__label ">Фото разворота*:</label>
            <SideBarInput
                id="add-book__examp-img"
                name="add-book__examp-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book side-bar__input-loading"
            />
            <FormControl>
                <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{mt: '10px', fontSize: styles.font.fontSize.medium}}
                >Подходит для первого самостоятельного чтения?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="no"
                    name="radio-buttons-group"
                    sx={{display: "flex", flexDirection: "row", mt: '-10px'}}
                >
                    <FormControlLabel value="no" control={<Radio />} label="Нет" />
                    <FormControlLabel value="yes" control={<Radio />} label="Да" />
                </RadioGroup>
            </FormControl>

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button sx={{width: '50%', bgcolor: styles.color.green}} onClick={handleClickAddBook}>Добавить</Button>
                <Button sx={{width: '50%', bgcolor: styles.color.greyDark}} onClick={handleClickClear}>Очистить</Button>
            </ButtonGroup>
        </form>
    )
}

export default SideBarAddBook;