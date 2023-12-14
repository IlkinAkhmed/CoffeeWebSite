import React from 'react'
import './index.scss'
import { useContext } from 'react'
import { wishlistContext } from '../../context/WishlistContext'
import Swal from 'sweetalert2';
import { BasketContext } from '../../context/BasketContext';
import useFetchData from '../../hooks/UseFetchData';
import Loading from '../isLoading';
import Error from '../Error';




function Wishlist() {
    const { favs, setFavs } = useContext(wishlistContext)
    const { basketArr, setBasketArr } = useContext(BasketContext)
    const {data, isLoading, error} = useFetchData("products")

    function addBasket(item) {
        const find = basketArr.find((x) => x.id === item.id);
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
       <>
            {
                isLoading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    <section id='wishlist'>
                    {favs.length === 0 ? (
                        <div className="empty">
                            <i class="fa-solid fa-heart">
                                <i className='fa-solid fa-xmark'></i>
                            </i>
                            <h1>Your Wishlist Is Empty Currently</h1>
                        </div>) : <div className="wishlist-inner">
                        <i className='fa-regular fa-heart'></i>
                        <h1>My Wishlist</h1>
                        <div className="wishWrapper">
                            {favs && favs.map((x) => (
                                <div className="wishCard">
                                    <div className="wishImg">
                                        <img src={x.img} alt="" />
                                    </div>
                                    <div className="wishTexts">
                                        <h2>Name: <span>{x.name}</span></h2>
                                        <p>Category: <span>{x.category}</span></p>
                                        <p>Price: <span>${x.discountPrice}</span></p>
                                    </div>
                                    <button onClick={() => addBasket(x)} >Add To Cart</button>
                                    <i onClick={() => setFavs(favs.filter((item) => item.id !== x.id))} className='fa-solid fa-trash-can'></i>
                                </div>
        
                            ))}
                        </div>
                    </div>}
                </section>
                )
            }
       </>
    )
}

export default Wishlist