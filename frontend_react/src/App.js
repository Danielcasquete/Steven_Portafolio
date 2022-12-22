import React from "react";
import { Route, Routes} from "react-router-dom";
import { Element } from "react-scroll";
import { images } from "../src/constants";

import { Link } from 'react-router-dom';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  MixedShop,
  MedStudy,
  Portfolio,
  AutoDoc,
  Atirodeas
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const Home = () => {
  return (
    <div className="App">
      <Element id="home" name="home">
        <Header  />
      </Element>
      <Element id="about"  name="about">
        <About />
      </Element>
      <Element id="work" name="work">
        <Work  />
      </Element>
      <Element id="skills" name="skills">
        <Skills />
      </Element>
      <Element id="testimonials"  name="testimonials">
        <Testimonial />
      </Element>
      <Element id="contact"  name="contact">
        <Footer  />
      </Element>
    </div>
  );
};

const Error = () => {
  return (
           <div className="error">
            <img style={{width:"30%"}}
            
            
            src={images.error} alt="error" />
            <p>
              <Link to="/">
              <button type="button">Go to home</button>
               </Link>
            </p>
          </div>
  );
};



const App = () => {
  return (
    <div id="app" className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MedStudy" element={<MedStudy />} />
        <Route path="/MixedShop" element={<MixedShop/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/AutoDoc" element={<AutoDoc />} />
        <Route path="/Atirodeas" element={<Atirodeas />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
};

export default App;
