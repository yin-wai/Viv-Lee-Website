import React, { useState }  from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }



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
          <a href='tel:+029309230' className='p-text'>+44 9090 9090 </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.instagram} alt='instagram' />
          <a href='https://www.instagram.com/vldietetics/' className='p-text'>@vldietetics</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.linkedin} alt='linkedin' />
          <a href='https://www.linkedin.com/in/vivian-lee-rd-b0a92a158/' className='p-text'>Vivian Lee</a>
        </div>
      </div>
      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>

        : <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>
      }

      <div className='app__footer-logos'>
        <div className='app__footer-logo'>
          <img src={images.bda} alt='BDA'/>
        </div>
        <div className='app__footer-logo'>
          <img src={images.freelance} alt='BDA Freelance Dietitians'/>
        </div>
        <div className='app__footer-logo'>
          <img src={images.hcpc} alt='hcpc registered'/>
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