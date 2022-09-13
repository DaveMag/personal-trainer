import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
// import Logo from "../assets/logo5.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const useHover = () => {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, []);
    return [ref, value];
  };

  const [hoverOne, isHoveredOne] = useHover();
  const [hoverTwo, isHoveredTwo] = useHover();
  const [hoverThree, isHoveredThree] = useHover();
  const [hoverAbout, isHoveredAbout] = useHover();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <div className="logo">
          <h2>
            JF
            <AiOutlineThunderbolt
              size={35}
              style={{ color: "#fff", fontWeight: 400, paddingBottom: 0, position: "relative", top: 4, left: -5,  }}
            />
          </h2>
          <p>Personal Training</p>
        </div>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link ref={hoverOne} className={isHoveredOne ? "hover" : null} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            ref={hoverAbout}
            className={isHoveredAbout ? "hover" : null}
            to="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            ref={hoverTwo}
            className={isHoveredTwo ? "hover" : null}
            to="/training"
          >
            Training
          </Link>
        </li>
        <li>
          <Link
            ref={hoverThree}
            className={isHoveredThree ? "hover" : null}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes
            size={40}
            style={{ color: "#fff" }}
            onMouseOver={({ target }) => (target.style.cursor = "pointer")}
          />
        ) : (
          <FaBars
            size={40}
            style={{ color: "#fff" }}
            onMouseOver={({ target }) => (target.style.cursor = "pointer")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
