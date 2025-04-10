import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";
import {useState} from "react";

function SideBarAddBook() {
    const [data, setData] = useState([3, 8]);
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
            <SideBarInput
                id="add-book__author"
                type="text"
                placeholder="Автор"
                classInput="side-bar__input_add-book"
            />
            <SideBarInput
                id="add-book__title"
                type="text"
                placeholder="Название"
                classInput="side-bar__input_add-book"
            />
            <div className="side-bar__slider">
                <Typography id="age" gutterBottom>
                    Возраст читателя
                </Typography>
                <Slider
                    aria-labelledby="age"
                    getAriaLabel={() => 'Возраст читателя'}
                    value={data} // Определяет активный дефолтный диапазон значений
                    onChange={(event, value) => setData(value)}
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