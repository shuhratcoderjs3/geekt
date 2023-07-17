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
        <div data-aos="zoom-in-right" className="container">
          <h2 className="OurClients-section-title">
            {languages[lang].Client.client_title}
          </h2>
        </div>
        <Slider
          width="250px"
          duration={50}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img src={ProActive} alt="ProActive" width={150} height={50} />
          </Slider.Slide>
          <Slider.Slide>
            <img src={Do} alt="any3" className="w-36" width={100} height={30} />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={TechnoShop}
              alt="any2"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Sultan}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img src={bp} alt="any3" className="w-36" width={100} height={20} />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Dono}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={yuksalish}
              alt="any3"
              width={100}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <div className="status_img">
              <img
                src={status}
                alt="any3"

                width={100}
                height={30}
              />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Asia}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Metallobond}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Fidan}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={MediaTech}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Avlod}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Bella}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Medal}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Discover}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={GrandTash}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Ilevel}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={UygaBozor}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Insaat}
              alt="any3"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Elegant}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Reventt}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Kiyim}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Smartlife}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Ailem}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={Melita}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={luxia}
              alt="any3"
              width={150}
              height={50}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={medicare}
              alt="any3"
              width={100}
              height={30}
            />
          </Slider.Slide>
        </Slider>
      </section>
    </>
  );
};

export default OurClients;
