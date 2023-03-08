import React from "react";
import "./about.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
export const About = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  return <>{isLoading ? <Loader></Loader> : <div></div>}</>;
};

export default About;
