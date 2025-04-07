import SideBarHeader from "./SideBarHeader";
import searchIcon from "../../images/icon_seach.png";

function SideBar() {
    return (
        <div className="side-bar">
            <SideBarHeader mainCl = 'side-bar__search' src = {searchIcon} name = 'Найти книгу' />
        </div>
    )
}
export default SideBar;