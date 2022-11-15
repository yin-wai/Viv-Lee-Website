import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './About.scss';

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

const About = () => {

  

  return (
    <>
      <div className='app__abouts'>
        <button className="p-text">CN</button>
        <h2 className='head-text'>
          I am Dietitian 
        </h2>
        <div>
          <p className='para'>
          Vivian graduated from the University of Surrey in 2018 with a First Class degree in Nutrition and Dietetics. Since then,  she has been working in England in a variety of settings, include hospitals (acute,  community and rehabilitation), clinics, nursing homes, in client's homes as well as worked in the private sector in facilities management as a Food Facilities Dietitian. She is registered with the Health Care Professions Council (HCPC) and the British Dietetics Association (BDA). She is FODMAP trained by King's College London and has worked with individuals with a variety of conditions such as diabetes, obesity, liver conditions, pancreatic exocrine insufficency (PEI), malnutrition, cardiac, stroke, Irritable Bowel Syndrome (IBS) and Inflammatory Bowel Disease (IBD).
          </p>
          {/* <p className='para'>
          Vivian 在2018年以營養與食品學一級榮譽畢業於University of Surrey。 及後， 她在醫療保健專業委員會 (HCPC) 和英國營養學協會 (BDA) 註冊。在英格蘭不同機構擔任營養師，為醫院（急性、社區和康復）、診所、療養院、私營機構以及上門提供服務。Vivian 亦在倫敦King’s College進修，主力研究各種因存在於天然食材或食品添加物中的一群短鏈碳水化合物及糖醇（FODMAP)引起的疾病。例如糖尿病、癡肥、肝臟疾病、胰腺外分泌功能不全 (PEI)、營養不良、心髒病、中風、腸燥症 (IBS) 和 炎症性腸病(IBD)等。
          </p> */}
        </div>
      </div>
      <motion.div
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
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  );