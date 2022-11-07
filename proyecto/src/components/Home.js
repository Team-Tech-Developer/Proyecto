import React, { useEffect } from "react";
//import image1 from "../resourses/products/portatil-dell.jpg";
//import image2 from "../resourses/products/portatil-lenovo.jpg";
//import image3 from "../resourses/products/lenovo-laptop.webp";
//import image4 from "../resourses/products/lenovo-desktop.webp";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../actions/productAction";

const Home = () => {
  const { loading, products, error } = useSelector(state=>state.products)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
    {loading? <h1>loading...</h1> : (
      <>
    <MetaData title="Cheap and cheerful Computers"></MetaData>
      <h1 id="encabezado_pdts">Latest products</h1>
      <section id="productos" className="container mt-5">
        <div className="row">
          {products && products.map (product => (
             <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
             <div className="card p-3 rounded">
               <img
                 className="card-img-top mx-auto"
                 src={product.image[0].url}
                 alt={product.image[0].public_id}
               ></img>
               <div className="card-body d-flex flex-column">
                 <h5 id="titulo_producto">
                   <a href="http://localhost:3000">{product.name}</a>
                 </h5>
                 <div className="rating mt-auto">
                   <div className="rating-outer">
                     <div className="rating-inner" style={{width: `${(product.score/5)*100}%`} }></div>
                   </div>
                   <span id="no_opiniones"> {product.numScores} reviews</span>
                 </div>
                 <p className="card-text">${product.price}</p>
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
          ))}
          
        </div>
      </section>
            </>
    )}
    </>
  );
};

export default Home;
