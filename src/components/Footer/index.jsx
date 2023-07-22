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
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5997.284471381936!2d69.226067!3d41.273125!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzIzLjMiTiA2OcKwMTMnMzMuOCJF!5e0!3m2!1suz!2s!4v1689762229227!5m2!1suz!2s"
        >
        </iframe>
        </div>

        <div className="footer-box">
        <h3 className="footer-title">© 2023 ООО «Astrolab». Сайт создан на <a className="footer-link" href="#">Astrolab.uz</a></h3>
        </div>
        
     </footer>
    </>
  );
};

export default Footer;
