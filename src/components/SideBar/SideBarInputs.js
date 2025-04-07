import SideBarInput from "./SideBarInput";
import {Slider} from "@mui/material";

function SideBarInputs() {

    const handleChange = (evt) => {
        evt.preventDefault();
        evt.target.parentNode.style.setProperty("--value", evt.target.value);
    };

    return (
        <div className="side-bar__inputs">
            <Slider
                getAriaLabel={() => 'Возраст читателя'}
                value={5}
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
            />
            <SideBarInput
                label="Название / Ключевое слово в названии"
                id="title"
                type="text"
                placeholder="приключения"
            />
        </div>
    )
}
export default SideBarInputs;