import React from "react";
import SpinningText from "./SpinningText";
import "./Website.scss";
import { AppWrap, MotionWrap } from "../../../wrapper";
import { images } from '../../../constants';

const Website = () => {
  return (
    <SpinningText text="Credits to JavaScript Mastery, he taught me how to develop this website.">
      <img src={images.Simbol} alt="logo" />
    </SpinningText>
    
  );
};

export default AppWrap(
  MotionWrap(Website, "app__website"),
  "website",
  "app__primarybg"
);
