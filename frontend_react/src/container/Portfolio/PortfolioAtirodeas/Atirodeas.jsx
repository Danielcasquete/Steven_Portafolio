import React from "react";
import "./Atirodeas.scss";
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from "../../../wrapper";
import { images } from '../../../constants';

const Atirodeas = () => {
  return (
    <div className="app__atirodeas">
      <div>
        <h1 className="head-text"> Atirodeas</h1>
      </div>
      <h2 style={{ color: "white" }}>Prototype {"(idle VM instance)"}</h2>
      <div className="app__atirodeas-img">
      <img  src={images.ProtoAti} alt="img" />
      </div>
      <h2 style={{ color: "white" }}>FrontEnd with Bootstrap</h2>
      <div className="app__atirodeas-img">
      <img  src={images.FrontendAti} alt="img" />
      </div>
      <h2 style={{ color: "white" }}>Use of Ajax for APIs</h2>
      <div className="app__atirodeas-img">
      <img  src={images.FrotjsAti} alt="img" />
      </div>
      <h2 style={{ color: "white" }}>Backend in java, with Spring Boot and Mongodb</h2>
      <div className="app__atirodeas-img">
      <img  src={images.BackendAti} alt="img" />
      </div>
      <div className="button">
      <Link to="/">
              <button type="button">Go to home</button>
      </Link></div>
    </div>
    
  );
};

export default AppWrap(
  MotionWrap(Atirodeas, "app__atirodeas"),
  "atirodeas",
  "app__primarybg"
);
