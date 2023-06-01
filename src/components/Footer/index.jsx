import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
      <div className="iframe-box">
        <iframe
          width="100%"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
        >
        </iframe>
        </div>

        <div className="footer-box">
        <h3 className="footer-title">© 2023 ООО «Astrolab production». Сайт создан на <a className="footer-link" href="#">Astrolab.uz</a></h3>
        </div>
        
     </footer>
    </>
  );
};

export default Footer;
