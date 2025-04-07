import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LineSeparate from "./components/LineSeparate";
import SideBar from "./components/SideBar/SideBar";
import BooksPre from "./components/BooksPre";
import SideBarInputs from "./components/SideBar/SideBarInputs";

function App() {
  return (
    <div className="App">
      <Header />
      <LineSeparate />
      <div className="section content">
          <SideBar />
          <BooksPre />
          <SideBarInputs />
      </div>

    </div>
  );
}

export default App;
