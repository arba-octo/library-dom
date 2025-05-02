import logo from "../../images/logo.svg";
import HeaderMenuItem from "./HeaderMenuItem";
import {useValue} from "../../features/search/use-value";
import {changeValueAction, selectSearch, setSearch} from "../../features/search/search-slice";
import {useDispatch} from "react-redux";

function Header() {
    const [search, handleChangeSearch] = useValue(selectSearch, changeValueAction);
    const dispatch = useDispatch();
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
                onBlur={() => dispatch(setSearch(search))}
            />
            <div className="header__menu">
                <HeaderMenuItem name={'Войти / Зарегистрироваться'} />
                <HeaderMenuItem name={'Избранное'} />
            </div>
        </header>
    )
}
export default Header;