import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      /*method returns sort order -1, 1, or 0 (for before, after, or equal). */
      data.sort((data, dato) =>
        data.year > dato.year ? -1 : data.year < dato.year ? 1 : 0
      );
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Studies</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                      <Tooltip 
                      arrow='true'
                      followCursor='true'
                      animation="scale"
                      theme="light"
                      title={`<h2>Description</h2><p>${
                        work.desc
                      }</p> <img style='width: 40%;
                      border-radius: 15px;' src=${urlFor(work.imgUrl)} alt=${work.name} /> `}
                      position="bottom"
                      trigger="mouseenter"
                    >
                      <div  className="skills-tooltip">
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      </div>
                    </Tooltip>
                 
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
