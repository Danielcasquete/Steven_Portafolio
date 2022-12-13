import React, {useState, useEffect} from 'react';
import {AiFillEve, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Work.scss'

import './Work.scss';

const [activeFilter, setactiveFilter] = useState('All')

const Work = () => {

const handleWorkFilter = (item) => {

}

  return (
    <>
      <h2 className="head-text">My creative <span>Portafolio</span> </h2>

      {['UI/UX', 'Web App', 'Mobile App', 'All'].map((item, index) => (
        <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          
        </div>
      ))}

    </>
  ) 
}

export default Work