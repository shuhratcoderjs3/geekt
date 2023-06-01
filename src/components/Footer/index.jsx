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
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Uzbekiston+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
        </div>

        <div className="footer-box">
        <h3 className="footer-title">© 2035 ООО «БизнесАс». Сайт создан на <a className="footer-link" href="#">Wix.com</a></h3>
        </div>
        
     </footer>
    </>
  );
};

export default Footer;
