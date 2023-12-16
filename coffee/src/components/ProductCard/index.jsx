import React, { useEffect } from "react";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { wishlistContext } from "../../context/WishlistContext";
import Swal from "sweetalert2";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../context/searchContext";

const ProductCard = ({ product }) => {
  const { basketArr, setBasketArr } = useContext(BasketContext);
  const { favs, setFavs } = useContext(wishlistContext);
  const { isFull } = useContext(searchContext)

  const navigate = useNavigate()

  function addWishlist(item) {
    const find = favs.find((x) => x._id === item._id);
    if (find) {
      setFavs(favs.filter(x => x._id !== item._id));

      Swal.fire({
        title: "Removed from wishlist",
        icon: "success",
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
    const find = basketArr.find((x) => x._id === item._id);
    if (find) {
      find.count++;
      find.total = find.discountPrice * find.count;
      setBasketArr([...basketArr]);

      Swal.fire({
        title: "Already In Cart!!! Count Increased",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
      title: "Added To Cart!",
      icon: "success",
    });
    const total = item.discountPrice;
    setBasketArr([...basketArr, { ...item, count: 1, total }]);
  }

  return (
    <div className={`${isFull ? "product-card-second" : "popularCard"}`}>
      <img
        style={{ height: "135px", width: "auto", margin: "0px, auto" }}
        src={product.img}
        alt=""
      />
      <div className="product-card-texts">
        <p>{product.category}</p>
        <h4>{product.name}</h4>
        <h5>
          PRICE - <span className="discount">${product.discountPrice} / </span>{" "}
          <span className="price">${product.price}</span>
        </h5>
      </div>
      <div className="like-basket">
        <i onClick={() => navigate(`/details/${product._id}`)} className="fa-regular fa-eye"></i>
        <i onClick={() => addBasket(product)} className="fa-solid fa-basket-shopping"></i>
        <i onClick={() => addWishlist(product)} className={`${favs.find(x => x._id === product._id) ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
      </div>
    </div>
  );
};


export default ProductCard;






