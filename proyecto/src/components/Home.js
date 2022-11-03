import React, { useEffect } from "react";
import image1 from "../resourses/products/portatil-dell.jpg";
import image2 from "../resourses/products/portatil-lenovo.jpg";
import image3 from "../resourses/products/lenovo-laptop.webp";
import image4 from "../resourses/products/lenovo-desktop.webp";
import MetaData from "./layout/MetaData";
import { useDispatch } from 'react-redux';
import { getProducts } from "../actions/productAction";

const Home = () => {

  /*const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])*/

  return (
    <>
    <MetaData title="Cheap and cheerful Computers"></MetaData>
      <h1 id="encabezado_pdts">Latest products</h1>
      <section id="productos" className="container mt-5">
        <div className="row">
          {/* Producto 1 */}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src={image1}
                alt="portatil dell"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Portátil Dell Vostro 3400</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="raiting-inner"></div>
                  </div>
                  <span id="no_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$2.500.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          {/* Producto 2 */}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src={image2}
                alt="portatil Lenovo"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Portátil Lenovo IdeaPad 3</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="raiting-inner"></div>
                  </div>
                  <span id="no_opiniones"> 7 reviews</span>
                </div>
                <p className="card-text">$1.500.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          {/* Producto 3 */}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src={image3}
                alt="Lenovo laptop"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Laptop IdeaPad 3i 6ta Gen</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="raiting-inner"></div>
                  </div>
                  <span id="no_opiniones"> 12 reviews</span>
                </div>
                <p className="card-text">$2.300.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          {/* Producto 4 */}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src={image4}
                alt="Lenovo desktop"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">IdeaCentre AIO 3 6ta Gen</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="raiting-inner"></div>
                  </div>
                  <span id="no_opiniones"> 9 reviews</span>
                </div>
                <p className="card-text">$3.100.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;
