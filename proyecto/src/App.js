import React from "react";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import { Navbar } from "./components/layout/Navbar";
import "./styles/App.css";
//import Adminhome from "./components/Adminhome"
import { Carrito } from "./components/Carrito/carrito"
import { Login } from "./components/Login/login"
import { ProductDetails } from "./components/products/ProductDetails";
// Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from "./components/admin/Dashboard";
import { ProductList } from "./components/admin/ProductList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container container-fluid">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Login" element={<Login />}/>
            {/*<Route path="/admin" element={<Adminhome/>}/>*/}
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/productList" element={<ProductList/>}/>
        </Routes>
      </div>
      <Footer />
   
    </Router>
  );
}

export default App;
