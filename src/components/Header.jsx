import React from "react";
import { Link } from "react-router-dom";
import img from "../images/kevin.png";
import "../pages/home/home.css";
export const header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left" id="top">
          <h3 >#GoodVibesOnly💫</h3>
          <h1 style={{ cursor: "pointer" }}>
            <Link href="/">Kevin Tamakuwala</Link>
          </h1>
          <p>
            Web Developer <br />
            Competitive Programmer <br />
            Tech Enthusiast
          </p> 
          <Link to="/" className="btn lg ">
            Download Resume
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={img} alt="logo" draggable="false" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
