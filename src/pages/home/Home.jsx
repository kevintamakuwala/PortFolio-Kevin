import React from "react";
import Header from "../../components/Header";
import "./home.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import Experience from "./../experience/Experience";
import Projects from "./../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import ScrollToTop from "../../components/ScrollToTop";

export const Home = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <Experience/>
          <Projects/>
          <Skills/>
          <Contact/>
        </>
      )}
    </>
  );
};
export default Home;
