import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  const handleClick = (index) => {
    setcurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      console.log('📢 Testimonials:', data);
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      console.log('🏷️ Brands:', data);
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];


  return (
    <>
      {testimonials.length && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="app__testimonial-item app__flex"
              initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >

              <img src={urlFor(test.imgurl)} alt={testimonials[currentIndex].name} />
              <div className="app__testimonial-content">
                <p className="p-text">{test.feedback}</p>
                <div>
                  <h4 className="bold-text">{test.name}</h4>
                  <h5 className="p-text">{test.company}</h5>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => {
              setDirection(1); // Mover a la izquierda
              handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
            }}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => {

              setDirection(-1); // Mover a la derecha
              handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
            }}>
              <HiChevronRight />
            </div>
          </div>

        </>
      )}
      <div className="app__testimonial-brands app__flex">
        <AnimatePresence mode="wait">
          {brands
            .filter((brand) =>
              brand.name.toLowerCase().trim() === test.company.toLowerCase().trim()
            )
            .map((brand) => (
              <motion.div
                key={brand._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
