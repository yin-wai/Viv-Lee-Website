import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'

import './Blog.scss';
import { urlFor, client } from '../../client';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs]';
    client.fetch(query)
      .then((data) => setBlogs(data))
  }, []);
  


  return (
    <div className='app__blogs'>
      {blogs.map((blog, index) => (
        <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__blogs-arts'
          key={blog.title + index}
        >
          <img src={blog.imgUrl} alt={blog.title} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>{blog.title}</h2>
          <p className='p-text' style={{ marginTop: 10 }}>{blog.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Blog