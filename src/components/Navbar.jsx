import { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  // navbar hide/show on scroll starts
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY || lastScrollY <= 70) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  // navbar hide/show on scroll ends
  return (
    <nav className={`${show && "hidden"}`}>
      <div className="container nav__container ">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <span>
            Kevin{" "}
            <span style={{ color: "var(--color-secondary)" }}>Tamakuwala</span>
          </span>
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
