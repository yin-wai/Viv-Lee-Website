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
        whileInView={{ x: [-400,0], opacity: [0,1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div className='inner-badge' style={{ marginLeft: 40, marginRight: 40}}>
              <h1 className='head-text'>Vivian Lee</h1>
              <p className='p-text'>Obesity and Bariatric Specialist Dietitian</p>
              <p className='p-text'>Dietitian</p>
              <p className='p-text'>As a certified Dietitian-Nutritionist in Hemel Hepstead, VL Dietetics offers diet and wellness coaching to everyone and anyone looking to live a healthier lifestyle. Whether you are looking for a weight loss plan, need assistance managing a specialty diet, or are looking to spice up your already existing wellness program, VL Dietetics is here for you.</p>
              <button>
                <a href={`#contact`}>Get in Touch</a>
              </button>
            </div>
          </div>
 
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');