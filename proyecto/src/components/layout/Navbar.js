import React from "react";
import "../../styles/navbar.css";
import logo from "../../resourses/logoTeam.jpeg";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand inside">
          <img src={logo} alt="Team Teach Store Logo" className="logo" />
          <Link to="/">
            <h4 id="text" className="a">
              Team Teach Store
            </h4>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Search product..."
          />
          <div className="input-grup-append">
            <button id="search-btn" className="btn btna">
              <i
                className="fa fa-search fa-lg text-white"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
  
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        {/* <span>
          <Link to="/LogIn">
            <button type="button" className="btn btn-warning ml-1 btnl">LogIn</button>
          </Link>
        </span> */}
        <div className="ml-4 dropdown d-inline"> 
          <Link
            to="/"
            className="btn dropdown-toggle text-white mr-4"
            type="button"
            id="dropDownMenu"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>Control Panel</span></Link>
            <div className="dropdown-menu" aria-labelledby="dropDownMenu">
              <Link className="dropdown-item" to="/admin/dashboard">
                Admin Products
              </Link>
              <Link className="dropdown-item" to="/#">
                Orders
              </Link>
              <Link className="dropdown-item" to="/#">
                Profile
              </Link>
              <Link className="dropdown-item" to="/#">
                Log out
              </Link>
            </div>
        </div>

        <Link to="/Carrito">
          <i
            className="fa fa-shopping-cart fa-lg text-white"
            aria-hidden="true"
          ></i>
          <span className="ml-1 a" id="cart_count btnl">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
}
