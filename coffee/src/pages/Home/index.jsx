import React from "react";
import Best from "../../components/Best";
import CafenaPopular from "../../components/CafenaPopular";
import CoffeeMachine from "../../components/CoffeeMachine";
import Map from "../../components/Map";
import News from "../../components/News";
import Popular from "../../components/Popular";
import Slider from "../../components/Slider";
import Story from "../../components/Story";
import Header from "../../layouts/Header";
import "./index.scss";
import useFetchData from "../../hooks/UseFetchData";
import Loading from "../isLoading";
import Error from "../Error";

const Home = () => {
  const { data, isLoading, error } = useFetchData("best");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Header />
          <Best />
          <Story />
          <Popular />
          <CoffeeMachine />
          <CafenaPopular />
          <Slider />
          <Map />
          <News />
        </main>
      )}
    </>
  );
};

export default Home;
