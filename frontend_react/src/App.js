import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { About, Footer, Header, Skills, Testimonial, Work, projects} from './container';
import { Navbar } from './components';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />

    </div>
  );
}


export default App;
 