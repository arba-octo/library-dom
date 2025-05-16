import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {styles} from "../../data/mui-styles";
import {Slider, TextField, Typography, Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import {
    setFilter,
    selectAge,
    selectTitle,
    selectAuthor,
    changeValueAction,
    clearAllFiltersAction, selectSeries,
} from '../../features/search/search-slice';
import {selectBooks} from "../../features/books-slice";
import {useValue} from "../../features/search/use-value";

function SideBarSearch() {
    const dispatch = useDispatch();
    const marks = [
        {
            value: 6,
            label: '6 лет'
        },
        {
            value: 12,
            label: '12 лет'
        }
    ]
    const [age, handleChangeAge] = useValue(selectAge, changeValueAction);
    const [title, handleChangeTitle] = useValue(selectTitle, changeValueAction);
    const [author, handleChangeAuthor] = useValue(selectAuthor, changeValueAction);
    const [series, handleChangeSeries] = useValue(selectSeries, changeValueAction);
    const books = useSelector(selectBooks); // массив с книгами из БД

    return (
        <div className="side-bar__inputs">
            <Typography id="age" gutterBottom>
                Возраст читателя
            </Typography>
            <Slider
                aria-labelledby="age"
                getAriaLabel={() => 'Возраст читателя'}
                value={age}
                step={1}
                min={0}
                max={18}
                valueLabelDisplay="auto"
                marks={marks}
                sx={{color: styles.color.green}}
                onChange={(evt) => dispatch(changeValueAction({id: "age", value: evt.target.value}))}
                onClick={(evt) => dispatch(setFilter({id: "ageToFilter", value: age, books}))}
            />
            <TextField
                id="title"
                variant="standard"
                label="Название / ключевое слово"
                value={title}
                onChange={handleChangeTitle}
                onBlur={(evt) => dispatch(setFilter({id: "title", value: title, books}))}
                sx={{ mt: 1, minWidth: 120 }}
            />
            <FormControl id="series" variant="standard" sx={{ mt: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Серия книг</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={series}
                    onChange={(evt) => dispatch(changeValueAction({id: "series", value: evt.target.value}))}
                    onBlur={(evt) => dispatch(setFilter({id: "series", value: series, books}))}
                    label="Series"
                >
                    <MenuItem value="">
                        <em>Без серии</em>
                    </MenuItem>
                    <MenuItem value="Котенок Шмяк">Котенок Шмяк</MenuItem>
                    <MenuItem value="Мейзи Хитчинс. Приключения девочки-детектива">Мейзи Хитчинс</MenuItem>
                    <MenuItem value="Земляничная Фея">Земляничная Фея</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="author"
                variant="standard"
                label="Автор"
                value={author}
                onChange={handleChangeAuthor}
                onBlur={(evt) => dispatch(setFilter({id: "author", value: author, books}))}
                sx={{ mt: 1, minWidth: 120 }}
            />
            <button
                className="clear side-bar__clear-button"
                onClick={(evt) => {
                    dispatch(clearAllFiltersAction(books))
                }}
            >Очистить фильтр</button>
        </div>
    )
}
export default SideBarSearch;