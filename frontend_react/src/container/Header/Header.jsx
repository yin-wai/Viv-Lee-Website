import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

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
            <div style={{ marginLeft: 20}}>
              <p className='p-text'>Hi, I am</p>
              <h1 className='head-text'>Vivian Lee</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header