import {useSelector, useDispatch} from 'react-redux';
import {
    selectAge, setAgeAction,
    selectAgeToFilter,
    selectTitle,
    selectAuthor,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction,
    setActiveFilter
} from '../../features/search/search-slice';
import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";
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

    //const age = useSelector(selectAge);

    const handleBlur = (evt) => {
        dispatch(setActiveFilter({
            id: evt.target.id,
            value: evt.target.value
        }))
    };

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
                onChange={(evt) => dispatch(changeValueAction({id: "age", value: evt.target.value}))}
                onClick={(evt) => dispatch(setActiveFilter({id: "ageToFilter", value: age}))}
            />
            <SideBarInput
                label="Название / Ключевое слово в названии"
                id="title"
                type="text"
                placeholder="приключения"
                value={title}
                onChange={handleChangeTitle}
                onBlur={handleBlur}
            />
            <SideBarInput
                label="Автор"
                id="author"
                type="text"
                placeholder="сутеев"
                value={author}
                onChange={handleChangeAuthor}
                onBlur={handleBlur}
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