import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../../actions/productActions";
import { useAlert } from "react-alert";
import { Carousel } from "react-bootstrap";
import { addItemToCart } from "../../actions/cartActions";

export const ProductDetails = () => {
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, id]);

  const increaseQty = () => {
    const contador = document.querySelector('.count')

    if(contador.valueAsNumber >= product.stock) return;

    const qty = contador.valueAsNumber+1;
    setQuantity(qty)
  }

  const decreaseQty = () => {
    const contador = document.querySelector('.count')

    if(contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber-1;
    setQuantity(qty)
  }

  const addToCart = () => {
    dispatch(addItemToCart(id, quantity));
    alert.success("¡Tu producto ha sido agregado al carrito de compras!")
  }

  return (
    <>
      {loading ? (
        <>
          <center>
            <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
            <span className="sr-only">Loading...</span>
            <h3>Loading...</h3>
          </center>
        </>
      ) : (
        <>
          <MetaData title={product.name} />
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="image_product">
              <Carousel pause="hover">
                {product.image &&
                  product.image.map((img) => (
                    <Carousel.Item key={img.public_id}>
                      <img
                        className="d-block w-100"
                        src={"../" + img.url}
                        alt={product.name}
                      ></img>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{product.name}</h3>
              <p id="product_id">Product ID {product._id}</p>
              <hr />

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.score / 5) * 100}%` }}
                ></div>
              </div>
              <span id="No_reviews"> ({product.numScores} Reviews)</span>
              <hr />
              <p id="product_price">${product.price} </p>
              <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                <input
                  type="number"
                  className="form-control count d-inline"
                  value={quantity}
                  readOnly
                />
                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
              </div>
              <button
                type="button"
                id="carrito_btn"
                className="btn btn-primary d-inline ml-4"
                disabled={product.stock === 0} onClick={addToCart}
              >
                Add to Cart
              </button>
              <hr />
              <p>
                Status:{" "}
                <span
                  id="stock_status"
                  className={product.stock > 0 ? "greenColor" : "redColor"}
                >
                  {product.stock > 0 ? "In stock" : "Unavaliable"}
                </span>
              </p>
              <hr />
              <h4 className="mt-2">Description</h4>
              <p>{product.description}</p>
              <hr />
              <p id="provider">
                Provider by: <strong>{product.provider}</strong>
              </p>
              <button
                id="btn_review"
                type="button"
                className="btn btn-primary mt-4"
                data-toggle="modal"
                data-target="#ratingModal"
              >
                Leave your opinion
              </button>
              <div className="alert alert-danger mt-5" type="alert">
                Login to leave your review
              </div>
              {/*Mensaje emergente para dejar opinion y calificacion*/}
              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div
                    className="modal fade"
                    id="ratingModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ratingModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">
                            Send Review
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="stars">
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>

                          <textarea
                            name="review"
                            id="review"
                            className="form-control mt-3"
                          ></textarea>

                          <button
                            className="btn my-3 float-right review-btn px-4 text-white"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
