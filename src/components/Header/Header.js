import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {changeValueAction, selectSearch, setSearch} from "../../features/search/search-slice";
import {useValue} from "../../features/search/use-value";
import {selectBooks} from "../../features/books-slice";
import logo from "../../images/logo.svg";
import {selectFavourites} from "../../features/favourites/favourites-slice";

function Header() {
    const [search, handleChangeSearch] = useValue(selectSearch, changeValueAction);
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    const favourites = useSelector(selectFavourites);

    return (
        <header className="section header">
            <Link to="/library-dom">
                <img className="header__logo" src={logo} alt="БиблиоDом лого"></img>
            </Link>
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

                {/*
                Скрываем элементы авторизаии и регистрации, пока не настроен сервер
                <LinkToOpenModal width={600} name="Войти" content={<AuthForm />} />
                <LinkToOpenModal width={600} name="Зарегистрироваться" content={<Reg />} />
                */}
                <Link to='/favourites' className='favourites'>{`Избранное (${favourites.length})`}</Link>
            </div>
        </header>
    )
}
export default Header;