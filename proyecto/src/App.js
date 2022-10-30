import React from "react";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Navbar />
      <div className="container container-fluid">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
      <Footer />
   
    </Router>
  );
}

export default App;
