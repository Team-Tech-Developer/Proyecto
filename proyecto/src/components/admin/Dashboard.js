import React from "react";
import MetaData from "../layout/MetaData";
import Siderbar from "./Siderbar";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Siderbar />
        </div>

        <div className="col-12 col-md-10">
          <h1 className="my-4">Control Panel</h1>

          <>
            <MetaData title={"Control Panel"} />
            <div className="row pr-4">
            {/* Tarjeta 1 */}
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Total Sales<br/><b>$25.000.000</b>
                    </div>
                  </div>
                </div>
              </div>
         
            {/* Tarjeta 2 */}
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Products<br/><b>250</b>
                    </div>
                  </div>
                    <Link className="card-footer text-white clearfix small z-1" to="/">
                        <span className="float-left">Details</span>
                        <span className="float-right"><i className="fa fa-angle-right"></i></span>
                    </Link>
                </div>
              </div>
            {/* Tarjeta 3 */}
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white  bg-dark o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Orders<br/><b>80</b>
                    </div>
                  </div>
                    <Link className="card-footer text-white clearfix small z-1" to="/">
                        <span className="float-left">Details</span>
                        <span className="float-right"><i className="fa fa-angle-right"></i></span>
                    </Link>
                </div>
              </div>

            {/* Tarjeta 4 */}
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                      Users<br/><b>512</b>
                    </div></div>
                    <Link className="card-footer text-white clearfix small z-1" to="/">
                        <span className="float-left">Details</span>
                        <span className="float-right"><i className="fa fa-angle-right"></i></span>
                    </Link>
                  </div>
                </div>

            {/* Tarjeta 5 */}
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">
                    Sold Out products<br/><b>14</b>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </>


        </div>
      </div>
    </>
  );
};
