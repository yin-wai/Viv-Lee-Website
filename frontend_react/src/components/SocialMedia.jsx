import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* <div>
            <BsTwitter />
        </div> */}
        <div>
            <a href='https://www.instagram.com/vldietetics/'>
              <BsInstagram />
            </a>
        </div>
        <div>
            <a href='https://www.linkedin.com/in/vivian-lee-rd-b0a92a158/'>
              <BsLinkedin />
            </a>
        </div>
        <div>
          <a href='https://www.tiktok.com/@vldietetics?_t=8UrOZKdwCf7&_r=1'>
            <FaTiktok />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia