import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
<<<<<<< HEAD
      <h2 className="head-text" style={{color:"white"}}>Take a coffee & chat with me</h2>
=======
      <h2 className="head-text">Take a coffee & chat with me</h2>
>>>>>>> ca473f0db59cb34802a3eeab80f11b755b4ea7ff

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
<<<<<<< HEAD
          <a href="mailto:danicasquete02@gmail.com" style={{color:"black"}} className="p-text">danicasquete02@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+57 3138434036" style={{color:"black"}} className="p-text">+57 3138434036</a>
=======
          <a href="mailto:danicasquete02@gmail.com" className="p-text">danicasquete02@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+57 3138434036" className="p-text">+57 3138434036</a>
>>>>>>> ca473f0db59cb34802a3eeab80f11b755b4ea7ff
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
<<<<<<< HEAD
          <h3 className="head-text" style={{color:"white"}}>
            Thank you for getting in touch! 😉
=======
          <h3 className="head-text">
            Thank you for getting in touch!
>>>>>>> ca473f0db59cb34802a3eeab80f11b755b4ea7ff
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);