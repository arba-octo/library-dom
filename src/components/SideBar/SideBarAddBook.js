import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";
import {
    selectAge,
    selectAuthor,
    selectTitle,
    setAgeAction,
    setAuthorAction,
    setTitleAction
} from "../../features/search/search-slice";
import {useValue} from "../../features/search/use-value";

function SideBarAddBook() {
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

    const [age, handleChangeAge] = useValue(selectAge, setAgeAction);
    const [title, handleChangeTitle] = useValue(selectTitle, setTitleAction);
    const [author, handleChangeAuthor] = useValue(selectAuthor, setAuthorAction);

    return (
        <div className="side-bar__inputs">
            <SideBarInput
                id="add-book__author"
                type="text"
                placeholder="Автор"
                classInput="side-bar__input_add-book"
                value={author}
                onChange={handleChangeAuthor}
            />
            <SideBarInput
                id="add-book__title"
                type="text"
                placeholder="Название"
                classInput="side-bar__input_add-book"
                value={title}
                onChange={handleChangeTitle}
            />
            <div className="side-bar__slider">
                <Typography id="age" gutterBottom>
                    Возраст читателя
                </Typography>
                <Slider
                    aria-labelledby="age"
                    getAriaLabel={() => 'Возраст читателя'}
                    value={age} // Определяет активный дефолтный диапазон значений
                    onChange={handleChangeAge}
                    step={1}
                    min={0}
                    max={18}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </div>
        </div>
            )
            }
            export default SideBarAddBook;