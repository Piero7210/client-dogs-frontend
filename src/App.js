import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../src/Components/LandingPage/LandingPage";
import Home from "../src/Components/Home/Home";
import Detail from "../src/Components/Detail/Detail";
import Form from "../src/Components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/landing" element={<LandingPage/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/detail/:id" element={<Detail/>} />
        <Route exact path="/create" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
