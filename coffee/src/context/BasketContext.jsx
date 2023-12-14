import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basketArr, setBasketArr] = useState(
    localStorage.getItem("CoffeeProducts")
      ? JSON.parse(localStorage.getItem("CoffeeProducts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("CoffeeProducts", JSON.stringify(basketArr));
  }, [basketArr]);


  const data = { basketArr, setBasketArr };

  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}
export default BasketProvider;
