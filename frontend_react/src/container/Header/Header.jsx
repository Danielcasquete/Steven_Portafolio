import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div className="notranslate" style={{ width: "140px" }}>
            {" "}
            <Typewriter
              options={{
                strings: ["Hi 🌎", "¡Salut!", "¡Hola!", "ʕ⁠´⁠•⁠ᴥ⁠•⁠`⁠ʔ;"],
                delay: 200,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">
              <h2>I'm</h2>
            </p>
            <h1 className="head-text" style={{ color: "black" }}>
              Steven
            </h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">

          <p style={{ fontSize: "1rem" }} className="p-text">Full-Stack Developer</p>
          <p style={{ fontSize: "1rem" }} className="p-text">Data analyst</p>
        </div>
        <div className="tag-cmp app__flex">
          <p style={{ color: "black" }} className="p-text">
            I'm a software developer with 1.5 years of experience in backend development using Java, Spring Boot, and hexagonal architecture, plus frontend skills with Angular and TypeScript. I’ve also worked with Docker and Jaspersoft.
            <br /><br />
            I have 5 months of freelance experience creating Java labs with Spring Boot, MongoDB, PostgreSQL, and Gitflow.
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.spring, images.angular, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(
  MotionWrap(Header, "app__header"),
  "home",
  "app__whitebg"
);
