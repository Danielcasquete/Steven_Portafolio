import React from "react";
import "./Autodoc.scss";

import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from "../../../wrapper";
import { images } from '../../../constants';

const Autodoc = () => {
  return (
    <div className="app__autodoc">
      <div>
        <h1 className="head-text"> AutoDoc</h1>
      </div>
      <div className="embed-container">
        <iframe
          src="https://onedrive.live.com/embed?resid=AFBB694CFF682EA8%213716&amp;authkey=%21ANCxuc6riIe28AA&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
          width="850px"
          height="505px"
          frameborder="0"
          title="iframe pptx"
        >
        </iframe>
        

      </div>
      <div className="app__autodoc-img">
        
      <img  src={images.Autodoc} alt="img" />
      </div><div className="button">
      <Link to="/">
              <button type="button">Go to home</button>
               </Link></div>
    </div>
    
  );
};

export default AppWrap(
  MotionWrap(Autodoc, "app__autodoc"),
  "autodoc",
  "app__primarybg"
);
