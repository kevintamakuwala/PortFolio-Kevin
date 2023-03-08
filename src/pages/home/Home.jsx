import React from "react";
import Header from "../../components/Header";
import "./home.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
export const Home = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  return <>{isLoading ? <Loader></Loader> : <Header />}</>;
};
export default Home;
