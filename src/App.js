import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Movie from "./components/Movie";
function App() {
  

  return (
    

<>
<header>
        <h1 style={{backgroundColor:'#393535'}}>Movie Booking</h1>
        <p  style={{backgroundColor:'#393535'}}>Book your favorite movies online</p>
    </header>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:name" element={<Movie />}/>
      </Routes>
    </BrowserRouter>
     
     </>
  );
}

export default App;
