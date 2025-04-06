import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LineSeparate from "./components/LineSeparate";
import PicMain from "./components/PicMain";

function App() {
  return (
    <div className="App">
      <Header />
      <LineSeparate />
        <PicMain />
    </div>
  );
}

export default App;
