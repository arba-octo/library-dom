import {useSelector, useDispatch} from 'react-redux';
import {
    setFilter,
    selectAge,
    selectTitle,
    selectAuthor,
    changeValueAction,
    clearAllFiltersAction,
} from '../../features/search/search-slice';
import {Slider, TextField, Typography} from "@mui/material";
import {useValue} from "../../features/search/use-value";
import {styles} from "../../data/mui-styles";

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


    /*const handleBlur = (evt, type) => {
        dispatch(setActiveFilter({
            id: evt.target.id,
            value: evt.target.value,
            type
        }))
    };*/

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
                onClick={(evt) => dispatch(setFilter({id: "ageToFilter", value: age}))}
            />
            <TextField
                id="title"
                variant="standard"
                label="Название / ключевое слово"
                value={title}
                onChange={handleChangeTitle}
                onBlur={(evt) => dispatch(setFilter({id: "title", value: title}))}
            />
            <TextField
                id="author"
                variant="standard"
                label="Автор"
                value={author}
                onChange={handleChangeAuthor}
                onBlur={(evt) => dispatch(setFilter({id: "author", value: author}))}
            />
            <button
                className="clear side-bar__clear-button"
                onClick={(evt) => {
                    dispatch(clearAllFiltersAction())
                }}
            >Очистить фильтр</button>
        </div>
    )
}
export default SideBarSearch;