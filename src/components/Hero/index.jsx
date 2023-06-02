import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
      <section className='hero-section'>
        <div className="container">
          <div data-aos="fade-up" className='hero-section-box'>
            <h1 className='hero-section-title'>Решения для бизнеса</h1>
            <p className='hero-section-subtitle'>
            Это текст. Нажмите здесь, чтобы изменить его.​
            </p>
            <button className="site-header-btn">Позвонить</button>
          </div>
        </div>
     </section>
    </>
  )
}

export default Hero;
