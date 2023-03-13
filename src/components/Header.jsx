import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/kevin.png";
import "../pages/home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { SiGithub, SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

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
              <br />
              <div className="socials">
                <a
                  href="https://github.com/kevintamakuwala/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub id="github" />
                </a>
                <a
                  href="https://www.codechef.com/users/kevin_t16"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiCodechef id="codechef" />
                </a>
                <a
                  href="https://leetcode.com/kevint16/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode id="leetcode" />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/kevintamakuwala16/practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGeeksforgeeks id="gfg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kevintamakuwala/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin id="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/kev.t16/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram id="instagram" />
                </a>
              </div>
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
