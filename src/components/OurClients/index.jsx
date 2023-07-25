import React from "react";
import "./OurClients.css";
import Slider from "react-infinite-logo-slider";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import ProActive from "../../assets/images/Logo/ProActiveLogo.png";
import TechnoShop from "../../assets/images/Logo/technoshop.png";
import bp from "../../assets/images/Logo/bp.png";
import yuksalish from "../../assets/images/Logo/yuksalish.png";
import Dono from "../../assets/images/Logo/DonoAcademy.PNG";
import status from "../../assets/images/Logo/status.png";
import Metallobond from "../../assets/images/Logo/Metallobond.JPG";
import Sultan from "../../assets/images/Logo/sultan.JPG";
import Do from "../../assets/images/Logo/DoActive.JPG";
import Asia from "../../assets/images/Logo/AsiaAuto.png";
import Fidan from "../../assets/images/Logo/fidan.png";
import MediaTech from "../../assets/images/Logo/Mediatech.JPG";
import Avlod from "../../assets/images/Logo/Avlod.png";
import Bella from "../../assets/images/Logo/BellaTme.png";
import Discover from "../../assets/images/Logo/DiscoverInves.png";
import GrandTash from "../../assets/images/Logo/GrandTashkent.png";
import Medal from "../../assets/images/Logo/Medallion.JPG";
import Ilevel from "../../assets/images/Logo/ilevel.png";
import UygaBozor from "../../assets/images/Logo/uygabozor.jpg";
import Insaat from "../../assets/images/Logo/insaat.jpg";
import Elegant from "../../assets/images/Logo/elegant.JPG";
import Reventt from "../../assets/images/Logo/REVENTT.jpg";
import Kiyim from "../../assets/images/Logo/kiyim.png";
import Smartlife from "../../assets/images/Logo/smartlive.PNG";
import Ailem from "../../assets/images/Logo/ailem.png";
import Melita from "../../assets/images/Logo/melita.jpg";
import luxia from "../../assets/images/Logo/luxia.jpg";
import medicare from "../../assets/images/Logo/medicare.jpg";
const OurClients = () => {
  const [lang, setLang] = useLocalization();
  return (
    <>
      <section className="OurClients-section" id="clients">
        <div className="container">
          <h2 className="OurClients-section-title">
            {languages[lang].Client.client_title}
          </h2>
          <ul className="OurClient-list">
            <li className="OurClient-item">
              <img
                className="OurClient-item-img"
                src={ProActive}
                alt="ProActive"
              />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Do} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={TechnoShop} alt="any2" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Sultan} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={bp} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Dono} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={yuksalish} alt="any3" />
            </li>
            <li className="OurClient-item">
              <div className="status_img">
                <img className="OurClient-item-img" src={status} alt="any3" />
              </div>
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Asia} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img
                className="OurClient-item-img"
                src={Metallobond}
                alt="any3"
              />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Fidan} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={MediaTech} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Avlod} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={Bella} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Medal} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Discover} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={GrandTash} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Ilevel} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={UygaBozor} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={Insaat} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Elegant} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Reventt} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={Kiyim} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={Smartlife} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={Ailem} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={Melita} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img-cov" src={luxia} alt="any3" />
            </li>
            <li className="OurClient-item">
              <img className="OurClient-item-img" src={medicare} alt="any3" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurClients;
