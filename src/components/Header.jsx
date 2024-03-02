import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/kevin.jpg";
import "../pages/home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Codeforces from "./../images/codeforces.svg";
import { FiChevronDown } from "react-icons/fi";

export const Header = () => {
  const [showDownArrow, setShowDownArrow] = useState(true);

  const handleScroll = () => {
    const scrolled = window.scrollY;

    if (scrolled > 100) {
      setShowDownArrow(false);
    } else {
      setShowDownArrow(true);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onDownArrowClick = () => {
    window.scrollBy({
      top: 700,
      behavior: "smooth",
    });
  };

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
      <header className="main__header">
        <div className="container main__header-container">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="main__header-left" id="top">
              <h3>#GoodVibesOnly💫</h3>
              <h1 style={{ cursor: "pointer" }}>
                <Link to="/">Kevin Tamakuwala</Link>
              </h1>
              <p>
                Full Stack Developer <br />
                Competitive Programmer <br />
              </p>
              <Link to="/" className="btn lg" onClick={onButtonClick}>
                Download Resume
              </Link>
              <br />
              <div className="socials">
                <a
                  href="https://codeforces.com/profile/kevintamakuwala16/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Codeforces} alt="Codeforces" id="codeforces" />
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

      {showDownArrow && (
        <div
          className="down-arrow"
          onClick={onDownArrowClick}
          aria-label="Scroll Down"
        >
          <FiChevronDown />
        </div>
      )}
    </>
  );
};

export default Header;
