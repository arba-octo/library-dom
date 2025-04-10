import {useSelector, useDispatch} from 'react-redux';
import {
    selectAge, setAgeAction,
    changeValueAction,
    selectValue
} from '../../features/filters-slice';
import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";

function SideBarSearch() {
    const dispatch = useDispatch();
    const age = useSelector(selectAge);
    const handleChange = (evt) => {
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
                value={age} // Определяет активный дефолтный диапазон значений
                onChange={(event, value) => dispatch(setAgeAction(value))}
                step={1}
                min={0}
                max={18}
                valueLabelDisplay="auto"
                marks={marks}
            />
            <SideBarInput
                label="Название / Ключевое слово в названии"
                id="title"
                type="text"
                placeholder="приключения"
                value={selectValue()}
                onChange={handleChange}
            />
            <SideBarInput
                label="Автор"
                id="author"
                type="text"
                placeholder="сутеев"
                value={selectValue()}
                onChange={handleChange}
            />
        </div>
    )
}
export default SideBarSearch;