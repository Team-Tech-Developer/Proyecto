import React from "react";
import MetaData from "../layout/MetaData";
import image1 from "../../resourses/products/portatil-lenovo.jpg";

export const ProductDetails = () => {
  return (
    <>
      <MetaData title="Laptop Lenovo IdeaPad3" />
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="image_product">
          <img
            src={image1}
            height="350"
            width="450"
            alt="portatil lenovo"
          ></img>
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>Portatil Lenovo IdeaPad 3</h3>
          <p id="product_id">Product #73265</p>
        </div>
      </div>
    </>
  );
};
