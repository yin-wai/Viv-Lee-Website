import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100,0], opacity: [0,1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{ marginLeft: 30, marginRight: 30}}>
              <h1 className='head-text'>Vivian Lee</h1>
              <p className='p-text'>Obesity and Bariatric Specialist Dietitian</p>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Dietitian</p>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Get in touch</p>
            <a href=''></a>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile.bg' />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-motion'
      >
        {}
      </motion.div> */}
    </div>
  )
}

export default AppWrap(Header, 'home');