import React, { useEffect } from "react";
//import image1 from "../resourses/products/portatil-dell.jpg";
//import image2 from "../resourses/products/portatil-lenovo.jpg";
//import image3 from "../resourses/products/lenovo-laptop.webp";
//import image4 from "../resourses/products/lenovo-desktop.webp";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const Home = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    alert.success("OK");
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <>
          <center>
          <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
          <span class="sr-only">Loading...</span>
          <h3>Loading...</h3>
          </center>
        </>
      ) : (
        <>
          <MetaData title="Cheap and cheerful computers"></MetaData>
          <h1 id="encabezado_pdts">Latest products</h1>
          <section id="productos" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="col-sm-12 col-md-6 col-lg-3 my-3"
                  >
                    <div className="card p-3 rounded">
                      <img
                        className="card-img-top mx-auto"
                        src={product.image[0].url}
                        alt={product.image[0].public_id}
                      ></img>
                      <div className="card-body d-flex flex-column">
                        <h5 id="titulo_producto">
                          <Link to={`/product/${product._id}`}>
                            {product.name}
                          </Link>
                        </h5>
                        <div className="rating mt-auto">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{ width: `${(product.score / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span id="no_opiniones">
                            {" "}
                            {product.numScores} reviews
                          </span>
                        </div>
                        <p className="card-text">${product.price}</p>
                        <Link
                          to={`/product/${product._id}`}
                          id="view_btn"
                          className="btn btn-block"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
