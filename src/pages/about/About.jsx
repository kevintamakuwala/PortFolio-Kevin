import React from "react";
import "./about.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import img from "./../../images/code.png";
import { BsInfoCircle } from "react-icons/bs";




export const About = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  const mystyle = {
    display: "flex",
    placeItems: "center",
  };
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <header
          className="skills skills__container"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div
           
          >
            <h2 className="heading__container">
              <BsInfoCircle />
              about me
            </h2>
          </div>
          <div className="about__container" style={mystyle}>
            
              <div className="about-left"
              
              >
                <p>
                  Hello and welcome to my portfolio! I am passionate about
                  building beautiful, functional websites using HTML, CSS, JavaScript, and ReactJS. Apart from my technical skills, I also possess strong analytical and problem-solving abilities, which enable me to identify and fix issues quickly. When I am not coding, you can find me binging movies, stargazing, or having a cup of tea.
                </p>
              </div>
            <div className="about-right">
              <img src={img} alt="" />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default About;
