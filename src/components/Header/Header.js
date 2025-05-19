import logo from "../../images/logo.svg";
import HeaderMenuItem from "./HeaderMenuItem";
import {useValue} from "../../features/search/use-value";
import {changeValueAction, selectSearch, setSearch} from "../../features/search/search-slice";
import {selectBooks} from "../../features/books-slice";
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const [search, handleChangeSearch] = useValue(selectSearch, changeValueAction);
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);

    return (
        <header className="section header">
            <img className="header__logo" src={logo} alt="БиблиоDом лого" >
            </img>
            <input
                id="search"
                className="header__search"
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={handleChangeSearch}
                onBlur={() => dispatch(setSearch({search, books}))}
            />
            <div className="header__menu">
                <HeaderMenuItem name={'Войти / Зарегистрироваться'} href="#" />
                <HeaderMenuItem name={'Избранное'} href="#" />
            </div>
        </header>
    )
}
export default Header;