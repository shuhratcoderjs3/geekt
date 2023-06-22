import React from 'react'
import "./AboutUs.css"
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
const AboutUs = () => {
  const [lang, setLang] = useLocalization();
  return (
    <>
      <section className='AboutUs-section' id='aboutus'>
        <div className="container">
          <div className='AboutUs-section-wrapper'>
          <div data-aos="fade-up-right" className='AboutUs-section-box '>
            <h2 className='AboutUs-section-title'>{languages[lang].About.about_title}</h2>
            <h3 className='AboutUs-section-subtitle'>{languages[lang].About.about_subtitle}</h3>
            <p className='AboutUs-section-desc'>{languages[lang].About.about_desc1}</p>
            <p className='AboutUs-section-desc'>{languages[lang].About.about_desc2}</p>
            </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
