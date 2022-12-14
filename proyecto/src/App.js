import React from "react";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { Navbar } from "./components/layout/Navbar";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adminhome from "./components/Adminhome"
import { Carrito } from "./components/Carrito/carrito"
import { Login } from "./components/Login/login"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container container-fluid">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Admin" element={<Adminhome/>}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Login" element={<Login />}/>
        </Routes>
      </div>
      <Footer />
   
    </Router>
  );
}

export default App;
