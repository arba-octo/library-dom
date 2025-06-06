import {useDispatch, useSelector} from "react-redux";
import {changeValueAction, selectSearch, setSearch} from "../../features/search/search-slice";
import {useValue} from "../../features/search/use-value";
import {selectBooks} from "../../features/books-slice";
import logo from "../../images/logo.svg";
import HeaderMenuItem from "./HeaderMenuItem";
import LinkToOpenModal from "../LinkToOpenModal";
import Auth from "./Auth";
import Reg from "./Reg";

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
                <LinkToOpenModal width={600} name="Войти" content={Auth} />
                <LinkToOpenModal width={600} name="Зарегистрироваться" content={Reg} />
                <HeaderMenuItem name={'Избранное'} href="#" />
            </div>
        </header>
    )
}
export default Header;