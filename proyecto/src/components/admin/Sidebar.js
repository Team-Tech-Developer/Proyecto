import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i>Administration
            </Link>
          </li>
          {/* Botones de productos */}
          <li>
            <a
              href="#productSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            ><i className="fa fa-product-hunt"></i>Products</a>
            <ul className="collapse list-unstyled" id="productSubmenu">
                <li>
                    <Link to="/admin/productList"><i className="fa fa-clipboard"></i>Products List</Link>
                </li>
                <li>
                    <Link to="/admin/newProduct"><i className="fa fa-plus"></i>Add Product</Link>
                </li>
            </ul>
          </li>
          {/* Botones de pedidos */}
          <li>
            <Link to="/"><i className="fa fa-shopping-basket"></i>Orders</Link>
          </li>

          {/* Botones de Usuarios */}
          <li>
            <Link to="/"><i className="fa fa-users"></i>Users</Link>
          </li>
          
          {/* Botones de reviws */}
          <li>
            <Link to="/"><i className="fa fa-users"></i>Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;