import {useState} from "react";
import searchIcon from "../../images/icon_seach.png";
import addBook from "../../images/icon-book.svg";
import SideBarSearch from "./SideBarSearch";
import SideBarAddBook from "./SideBarAddBook";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenAddBook = () => {
        setIsOpen(true);
    }

    return (
        <div className="side-bar">
            <div className="side-bar__item side-bar__search">
                <div className="side-bar__title side-bar__title-search">
                    <img src={searchIcon} alt="Иконка к тексту"/>
                    <h2>Найти книгу</h2>
                </div>
                <SideBarSearch/>
            </div>
            <div className="side-bar__item side-bar__add-book" onClick={handleOpenAddBook}>
                <div className="side-bar__title side-bar__title_add-book">
                    <img src={addBook} alt="Добавить"/>
                    <h2>Добавить свою книгу в БиблиоDом</h2>
                </div>
                {isOpen === false && <hr className="side-bar__add-book_line"/>}
                {isOpen === true && <SideBarAddBook/>}
            </div>
        </div>
    )
}

export default SideBar;