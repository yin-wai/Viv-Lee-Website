import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

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
    </div>
  )
}

export default SocialMedia