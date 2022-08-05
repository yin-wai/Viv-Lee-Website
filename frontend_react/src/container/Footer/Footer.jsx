import React, { useState }  from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Contact me on the following:</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:vl.dietetics@gmail.com' className='p-text'>vl.dietetics@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+029309230' className='p-text'>+44 090909090 </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.instagram} alt='instagram' />
          <a href='https://www.instagram.com/vldietetics/' className='p-text'>V L Dietitics</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.linkedin} alt='linkedin' />
          <a href='https://www.linkedin.com/in/vivian-lee-rd-b0a92a158/' className='p-text'>Vivian Lee</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)