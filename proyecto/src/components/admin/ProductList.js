import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import Siderbar from "./Sidebar";
import { MDBDataTable } from "mdbreact";

export const ProductList = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const alert = useAlert();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    //alert.success("OK");
  }, [dispatch]);

  const setProducts = () => {
    const data = {
      columns: [
        { 
         label: "Name",
         field: "name", 
         sort: "asc" 
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
        },
        {
          label: "Provider",
          field: "provider",
          sort: "asc",
        },
      ],
      rows: [],
    };
   

  
    products.forEach(product => {
      data.rows.push({
        name: product.name,
        price: `$${product.price}`,
        stock: product.stock,
        provider: product.provider,
      });
    });
    return data;
  };

  return (
    <>
      <MetaData title={"All products"}></MetaData>
      <div className="row">
        <div className="col-12 col-md-2">
          <Siderbar />
        </div>

        <div className="col-12 col-md-10">
          <>
            <h1 className="my-y">Registered products</h1>
            {loading ? (
              <>
                <center>
                  <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
                  <span className="sr-only">Loading...</span>
                  <h3>Loading...</h3>
                </center>
              </>
            ) : (
              <MDBDataTable
                data={setProducts()}
                className="px-3"
                bordered
                striped
                hover
              ></MDBDataTable>
            )}
          </>
        </div>
      </div>
    </>
  );
};
