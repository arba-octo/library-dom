import Header from "../components/Header/Header";
import LineSeparate from "../components/LineSeparate";
import SideBar from "../components/SideBar/SideBar";
import Books from "../components/Books/Books";

function MainPage() {
    return (
        <div className="App">
            <Header/>
            <LineSeparate/>
            <div className="section content">
                <SideBar/>
                <Books/>
            </div>
        </div>
    )
}
export default MainPage;