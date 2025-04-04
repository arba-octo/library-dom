import logo from "../../images/logo.svg";
import HeaderMenuItem from "./HeaderMenuItem";


function Header() {
    return (
        <header className="section header">
            <img className="header__logo" src={logo} alt="БиблиоDом лого" >
            </img>
            <input className="header__search" type="text" placeholder="Поиск"/>
            <div className="header__menu">
                <HeaderMenuItem name={'Войти / Зарегистрироваться'} />
                <HeaderMenuItem name={'Избранное'} />
            </div>
        </header>
    )
}
export default Header;