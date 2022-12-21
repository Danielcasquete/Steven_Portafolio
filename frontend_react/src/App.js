import React from "react";
import { Route, Routes} from "react-router-dom";
import { Element } from "react-scroll";

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
      <Element name="home">
        <Header />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="testimonials">
        <Testimonial />
      </Element>
      <Element id="contact" name="contact">
        <Footer />
      </Element>
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
      </Routes>
    </div>
  );
};

export default App;
