import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/kevin.jpg";
import "../pages/home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Codeforces  from "./../images/codeforces.svg";

export const Header = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const onButtonClick = () => {
    fetch("Kevin_Tamakuwala_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Kevin_Tamakuwala_Resume.pdf";
        alink.click();
      });
    });
  };
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
              <Link to="/" className="btn lg " onClick={onButtonClick}>
                Download Resume
              </Link>
              <br />
              <div className="socials">
                <a
                  href="https://codeforces.com/profile/kevintamakuwala16/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <SiCodeforces/> */}
                  <img src={Codeforces} alt="Codeforces" id="codeforces"
                 
                  />
                </a>

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
