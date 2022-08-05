import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I am dietarian 
      </h2>
      <p className='para'>
      Vivian graduated from the University of Surrey in 2018 with a First Class degree in Nutrition and Dietetics. Since then,  she has been working in England in a variety of settings, include hospitals (acute,  community and rehabilitation), clinics, nursing homes,, in client's homes as well as worked in the private sector in facilities management as a Food Facilities Dietitian. She is registered with the Health Care Professions Council (HCPC) and the British Dietetics Association (BDA). She is FODMAP trained by King's College London and has worked with individuals with a variety of conditions such as diabetes, obesity, liver conditions, pancreatic exocrine insufficency (PEI), malnutrition, cardiac, stroke, Irritable Bowel Syndrome (IBS) and Inflammatory Bowel Disease (IBD).
      </p>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  );