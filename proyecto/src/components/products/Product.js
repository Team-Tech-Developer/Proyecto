import React from "react";
import { Link } from "react-router-dom";

export const Product = ({product}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src={product.image[0].url}
          alt={product.image[0].public_id}
        ></img>
        <div className="card-body d-flex flex-column">
          <h5 id="titulo_producto">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="rating mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.score / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_opiniones"> {product.numScores} reviews</span>
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
  );
};
