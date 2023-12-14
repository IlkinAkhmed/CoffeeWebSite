import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Shop from "./pages/Shop";
import "./App.scss";
import Menu from "./pages/Menu";
import Basket from "./pages/BasketPage";
import BasketProvider from "./context/BasketContext";
import SearchProvider from "./context/searchContext";
import WishlistPovider from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";
import Details from "./pages/Details";
import DetailsProvider from "./context/DetailsContext";
import Loading from "./pages/isLoading";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <BasketProvider>
      <SearchProvider>
        <WishlistPovider>
          <DetailsProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/details/:itemId" element={<Details />} />
                <Route path="/faq" element={<FAQ />} />
              </Route>
            </Routes>
          </DetailsProvider>
        </WishlistPovider>
      </SearchProvider>
    </BasketProvider>
  );
};

export default App;
