
import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
     <a target="_blank " href='https://www.linkedin.com/in/daniel-steven-707467221/'>
    <div>
      <BsLinkedin />
    </div>
    </a>
    <a target="_blank "  href='https://www.instagram.com/danistevenc/'>
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;