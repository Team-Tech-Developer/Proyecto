import React from "react";
import image1 from '../resourses/products/portatil-dell.jpg'

const Home = () => {
  return (
    <>
      <h1 id="encabezado_pdts">Sale off</h1>
      <section id="productos" className="container mt-5">
        <div className="row">
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
                <a href="http://localhost:3000" id="ver_producto" className="btn btn-block">
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
