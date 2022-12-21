import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const scrollType = {
  duration: 200,
};

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonials", "contact"].map(
      (item, index) => (
        <Link
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          onClick={() => {
            setTimeout(() => {
              scroller.scrollTo(`${item}`, scrollType);
            });
          }}
          to={`/`}
        ></Link>
      )
    )}
  </div>
);

export default NavigationDots;
