import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/UseFetchData";
import Loading from "../isLoading";
import Error from "../Error";

const Basket = () => {
  const { basketArr, setBasketArr } = useContext(BasketContext);
  const {data, isLoading, error} = useFetchData("products");

  let subtotal = 0;
  basketArr.map((element) => {
    subtotal += element.total;
  });

  function modifyCount(isIncrement, item) {
    const find = basketArr.find((x) => x.id === item.id);
    if (isIncrement) {
      find.count++;
      item.total = item.discountPrice * item.count;
      setBasketArr([...basketArr]);
    } else {
      if (find.count === 1) {
        return;
      }
      find.count--;
      item.total = item.discountPrice * item.count;
      setBasketArr([...basketArr]);
    }
  }

  const navigate = useNavigate()

  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <section id="basket">
      {basketArr.length === 0
        ? (
          <div className="empty">
            <i class="fa-solid fa-cart-shopping">
              <i className="fa-solid fa-xmark"></i>
            </i>
            <h1>Your Basket Is Empty Currently</h1>
            <p onClick={()=>navigate('/shop')}>Continue Shopping</p>
          </div>
        ) : (
          <div className="basket-inner">
            <h1>Shop Basket</h1>
            <div className="basketHeadTexts">
              <p>Product</p>
              <p>Category</p>
              <p>
                Price & <span>Discount Price</span>
              </p>
              <p>Product Quantity</p>
              <p>Total Price</p>
            </div>
            <div className="basketWrapper">
              {basketArr &&
                basketArr.map((item) => (
                  <div className="basketCard">
                    <div className="basketImg">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="basketCardTexts">
                      <p className="name">{item.name}</p>
                      <p className="category">{item.category}</p>
                      <div className="productDetail">
                        <p>{item.price}.00</p> <span> ${item.discountPrice}.00</span>
                      </div>
                      <div className="quantity">
                        <p
                          className="countModify"
                          onClick={() => modifyCount(true, item)}
                        >
                          +
                        </p>
                        <p>{item.count}</p>
                        <p
                          className="countModify"
                          onClick={() => modifyCount(false, item)}
                        >
                          -
                        </p>
                      </div>
                      <p className="total">${item.total}.00</p>
                      <i
                        onClick={() =>
                          setBasketArr(basketArr.filter((x) => x.id !== item.id))
                        }
                        className=" fa-solid fa-trash-can"
                      ></i>
                    </div>
                  </div>
                ))}
            </div>
            <p className="subtotal">Subtotal: ${subtotal}.00</p>
          </div>
        )}
      </section>
        )
      }
    </>
  );
};

export default Basket;
