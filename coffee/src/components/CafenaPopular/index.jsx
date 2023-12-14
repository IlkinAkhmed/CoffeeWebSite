import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import useFetchData from "../../hooks/UseFetchData";
import Swal from "sweetalert2"
import "./index.scss";
import { wishlistContext } from "../../context/WishlistContext";

const CafenaPopular = () => {
  const { basketArr, setBasketArr } = useContext(BasketContext)


  const { favs, setFavs } = useContext(wishlistContext);

  function addWishlist(item) {
    const find = favs.find((x) => x.id === item.id);
    if (find) {
      setFavs([...favs]);
      Swal.fire({
        title: "Already In Wishlist!!!",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Added To Wishlist!",
      icon: "success",
    });
    setFavs([...favs, { ...item }]);
  }


  function addBasket(item) {
    const find = basketArr.find((x) => x.id === item.id)
    if (find) {
      find.count++
      find.total = find.discountPrice * find.count
      setBasketArr([...basketArr])
      Swal.fire({
        title: "Already In Cart!!! Count increased",
        icon: "warning",
      });
      return
    }
    Swal.fire({
      title: "Added To Cart!",
      icon: "success",
    });
    const total = item.discountPrice
    setBasketArr([...basketArr, { ...item, count: 1, total }])
  }
  const { data, isLoading, error } = useFetchData("products");
  const navigate = useNavigate();
  return (
    <section id="popularPoduct">
      <div className="container">
        <span className="headtext">POPULAR PRODUCT</span>
        <div className="textAndButton">
          <h2>CAFENA POPULAR PRODUCT</h2>
          <button onClick={() => navigate("/shop")}>VIEW ALL PRODUCT</button>
        </div>
        <div className="wrapper">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data
              .filter((x) => x.status === "popular")
              .map((x) => {
                return (
                  <>

                    <div className="popularCard3">
                      <div className="bg"></div>
                      <div className="links">
                        <i onClick={() => addBasket(x)} className="fa-solid fa-basket-shopping"></i>
                        <i onClick={()=>navigate(`/details/${x.id}`)} className="fa-regular fa-eye"></i>
                        <i onClick={() => addWishlist(x)} className="fa-regular fa-heart"></i>
                      </div>
                      <div className="popularImage">
                        <img
                          src={x.img}
                          alt=""
                        />
                      </div>
                      <div className="texts">
                        <p>
                          COFFEE
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </p>
                        <h3>{x.name}</h3>
                        <p>
                          PRICE - ${x.discountPrice} <span>${x.price}</span>
                        </p>
                      </div>
                    </div>

                  </>
                );
              })
          )}
        </div>
      </div>
    </section>
  );
};

export default CafenaPopular;
