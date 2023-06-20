import React from 'react'
import './Hero.css'
import { useLocalization } from '../../hooks/useLocalization'
import { languages } from '../../localization/languages'
const Hero = () => {
  const [lang] = useLocalization();
  return (
    <>
      <section className='hero-section'>
        <div className="container">
          <div data-aos="fade-up" className='hero-section-box'>
            <h1 className='hero-section-title'>{ languages[lang].hero.hero_title}</h1>
            <p className='hero-section-subtitle'>{ languages[lang].hero.hero_subtitle}
            </p>
            <button className="site-header-btn">{ languages[lang].hero.hero_btn}</button>
          </div>
        </div>
     </section>
    </>
  )
}

export default Hero;
