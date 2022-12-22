import React from "react";
import "./Mixedshop.scss";
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from "../../../wrapper";
import { images } from '../../../constants';

const Mixedshop = () => {
  return (
    <div className="app__mixedshop">
      <div>
        <h1 className="head-text"> Mixedshop</h1>
      </div>
      <div className="embed-container">
        <iframe
        src="https://onedrive.live.com/embed?resid=AFBB694CFF682EA8%213709&amp;authkey=!AGRSx3gQcVE4jHA&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
        width="850px"
        height="505px"
        frameborder="0"
        title="iframe pptx"
      >
      </iframe>
      

    </div>
    <div className="app__mixedshop-img">
      
    <img  src={images.Mixedshop} alt="img" />
    </div><div className="button">
    <Link to="/">
              <button type="button">Go to home</button>
               </Link></div>
  </div>
  
);
};

export default AppWrap(
  MotionWrap(Mixedshop, "app__mixedshop"),
  "mixedshop",
  "app__primarybg"
);
