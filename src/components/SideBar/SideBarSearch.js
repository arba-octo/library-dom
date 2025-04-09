import {useState} from 'react'
import SideBarInput from "./SideBarInput";
import {Slider, Typography} from "@mui/material";

function SideBarSearch() {
    const [data, setData] = useState([0, 18]);
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
                value={data} // Определяет активный дефолтный диапазон значений
                onChange={(event, value) => setData(value)}
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
            />
            <SideBarInput
                label="Автор"
                id="author"
                type="text"
                placeholder="сутеев"
            />
        </div>
    )
}
export default SideBarSearch;