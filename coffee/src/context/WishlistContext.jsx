import { createContext, useEffect, useState } from "react";



export const wishlistContext = createContext()

function WishlistPovider({children}) {
    const [favs, setFavs] = useState(localStorage.getItem('WishlistProducts') ? JSON.parse(localStorage.getItem('WishlistProducts')) : [])


    useEffect(() => {
        localStorage.setItem('WishlistProducts',JSON.stringify(favs))
    }, [favs])
    

    const data = {
        favs,
        setFavs
    }

    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistPovider