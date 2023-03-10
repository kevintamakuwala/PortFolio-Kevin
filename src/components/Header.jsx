import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/kevin.png";
import "../pages/home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const Header = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <header className=" main__header">
        <div className="container main__header-container">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="main__header-left" id="top">
              <h3>#GoodVibesOnly💫</h3>
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
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="main__header-right">
              <div className="main__header-circle"></div>
              <div className="main__header-image">
                <img src={img} alt="Kevin" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
