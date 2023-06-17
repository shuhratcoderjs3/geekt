import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
      <section className='hero-section'>
        <div className="container">
          <div data-aos="fade-up" className='hero-section-box'>
            <h1 className='hero-section-title'>Biznesingizni raqamlarda ko`ring!</h1>
            <p className='hero-section-subtitle'>
            Ortiqcha xarajatlarni optimallashtiramiz va foydangizni oshiramiz!​
            </p>
            <button className="site-header-btn">Позвонить</button>
          </div>
        </div>
     </section>
    </>
  )
}

export default Hero;
