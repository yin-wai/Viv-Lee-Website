import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'blog', 'testimonial', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#A0AED1' } : { }}
                />
        ))}
    </div>
  )
}

export default NavigationDots