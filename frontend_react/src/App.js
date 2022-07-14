import React from 'react';

import { About, Footer, Header, Calendar, Blog, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Blog />
        <Testimonial />
        <Calendar />
        <Footer />
    </div>
  )
}

export default App;