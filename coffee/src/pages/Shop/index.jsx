import React, { useContext } from "react";
import Product from "../../components/Product";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";
import useFetchData from "../../hooks/UseFetchData";
import Loading from "../isLoading";
import Error from "../Error";
import "./index.scss"

const Shop = () => { 
  const {data, isLoading, error} = useFetchData("products");
  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <div>
            <div className="contact-main">
              <h2>CAFENA PRODUCT</h2>
              <div className="home-slash-page">
                <h6>HOME/</h6>
                <span>PRODUCT</span>
              </div>
              <img className='shape' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
            </div>
            <div style={{ maxWidth: "83%", margin: "0 auto" }}>
              <Sort />
              <div className="shop-main-container"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Product />
                <Filter />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Shop;
