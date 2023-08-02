import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
//Routs
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  //replace with heroku website before netlify deploy: https://rosanne-anderson-portfolio.herokuapp.com/
  const URL = "http://rosanneanderson.com";

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/portfolio" element={<Portfolio URL={URL}/>} />
          <Route  path="/resume" element={<Resume URL={URL} />} />
          <Route  path="/contact" element={<Contact URL={URL} />} />
        </Routes>
    </div>
  );
}

export default App;
