import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

import { images } from "../../constants";
import "./Navbar.scss";

const scrollType = {
  duration: 200,
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link
          onClick={() => {
            setTimeout(() => {
              scroller.scrollTo(`home`, scrollType);
            }, 300);
          }}
          to={`/`}
        >
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />

              <Link
                onClick={() => {
                  setTimeout(() => {
                    scroller.scrollTo(`${item}`, scrollType);
                  }, 300);
                }}
                to={`/`}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>

                  <Link
                    onClick={() => {
                      setTimeout(() => {setToggle(false)
                        scroller.scrollTo(`${item}`, scrollType);
                      }, 300);
                    }}
                    to={`/`}
                  >
                     {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
