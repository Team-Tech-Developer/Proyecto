import React from "react";
import Card from "../../resourses/products/portatil-dell.jpg"

export const Carrito = () => {
    return (
        <div className="carrito">
            <h2>Su carrito</h2>
            <div className="carrito_center">
                <div className="carrito_item">
                    <img src={Card} alt=""/>
                    <div>
                        <h3>Portátil Dell Vostro 3400</h3>
                        <p className="price">$2.500.000</p>
                    </div>
                    <div>
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        <p className="cantidad">1</p>
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                    <div className="remove_item">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div> 

                <div className="carrito_item">
                    <img src={Card} alt=""/>
                    <div>
                        <h3>Portátil Dell Vostro 3400</h3>
                        <p className="price">$2.500.000</p>
                    </div>
                    <div>
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        <p className="cantidad">1</p>
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                    <div className="remove_item">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="carrito_item">
                    <img src={Card} alt=""/>
                    <div>
                        <h3>Portátil Dell Vostro 3400</h3>
                        <p className="price">$2.500.000</p>
                    </div>
                    <div>
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        <p className="cantidad">1</p>
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                    <div className="remove_item">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
                
            </div>

            <div className="carrito_footer">
                <h3> Total: $2.500.000 </h3>
                <button className="btn">Ir a pagar</button>
            </div>
        </div>
    )
}