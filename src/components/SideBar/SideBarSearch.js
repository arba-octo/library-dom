import {useSelector, useDispatch} from 'react-redux';
import {
    selectAge, setAgeAction,
    selectTitle,
    selectAuthor,
    changeValueAction,
    removeFilterAction,
    clearAllFiltersAction
} from '../../features/search/search-slice';
import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";

function SideBarSearch() {
    const dispatch = useDispatch();
    const age = useSelector(selectAge);
    const title = useSelector(selectTitle);
    const author = useSelector(selectAuthor);
    const handleBlurValue = (evt) => {
        dispatch(changeValueAction({
            id: evt.target.id,
            value: evt.target.value
        }))
    };
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

    return (
        <div className="side-bar__inputs">
            <Typography id="age" gutterBottom>
                Возраст читателя
            </Typography>
            <Slider
                aria-labelledby="age"
                getAriaLabel={() => 'Возраст читателя'}
                value={age}
                onChange={(evt) => {dispatch(setAgeAction(age))}}
                step={1}
                min={0}
                max={18}
                valueLabelDisplay="auto"
                marks={marks}
                onClick={(evt) => dispatch(removeFilterAction(evt.target))}
            />
            <SideBarInput
                label="Название / Ключевое слово в названии"
                id="title"
                type="text"
                placeholder="приключения"
                value={title}
                onChange={handleBlurValue}
                onClick={(evt) => dispatch(removeFilterAction(evt.target))}
            />
            <SideBarInput
                label="Автор"
                id="author"
                type="text"
                placeholder="сутеев"
                value={author}
                onChange={handleBlurValue}
                onClick={(evt) => dispatch(removeFilterAction(evt.target))}
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