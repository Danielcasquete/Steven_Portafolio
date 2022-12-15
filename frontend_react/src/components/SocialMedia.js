
import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
     <a  href='https://www.linkedin.com/in/daniel-steven-707467221/'>
    <div>
      <BsLinkedin />
    </div>
    </a>
    <a  href='https://www.facebook.com'>
    <div>
      <FaFacebookF />
    </div>
    </a>
    <a  href='https://www.instagram.com/danistevenc/'>
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;