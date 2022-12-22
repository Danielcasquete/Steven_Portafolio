import React from "react";
import "./Medstudy.scss";
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from "../../../wrapper";
import { images } from '../../../constants';

const Medstudy = () => {
  return (
    <div className="app__medstudy">
      <div>
        <h1 className="head-text"> Medstudy</h1>
      </div>
      <div className="embed-container">
        <iframe
          src="https://onedrive.live.com/embed?resid=AFBB694CFF682EA8%213714&amp;authkey=%21AFp91R3YNQ_wu7U&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
          width="850px"
          height="505px"
          frameborder="0"
          title="iframe pptx"
        >
        </iframe>
        

      </div>
      <div className="app__medstudy-img">
        
      <img  src={images.Medstudy} alt="img" />
      </div><div className="button">
            <Link to="/">
              <button type="button">Go to home</button>
               </Link></div>
    </div>
    
  );
};

export default AppWrap(
  MotionWrap(Medstudy, "app__medstudy"),
  "medstudy",
  "app__primarybg"
);
