import React from "react";
import "./OurClients.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import TechnoShop from "../../assets/images/Logo/technoshop.webp";
import bp from "../../assets/images/Logo/bp.webp";
import Dono from "../../assets/images/Logo/DonoAcademy.webp";
import status from "../../assets/images/Logo/status.webp";
import Metallobond from "../../assets/images/Logo/Metallobond.webp";
import Sultan from "../../assets/images/Logo/sultan.webp";
import Do from "../../assets/images/Logo/DoActive.webp";
import Asia from "../../assets/images/Logo/AsiaAuto.webp";
import Fidan from "../../assets/images/Logo/fidan.webp";
import MediaTech from "../../assets/images/Logo/Mediatech.webp";
import Bella from "../../assets/images/Logo/BellaTme.webp";
import Discover from "../../assets/images/Logo/DiscoverInves.webp";
import GrandTash from "../../assets/images/Logo/GrandTashkent.webp";
import Medal from "../../assets/images/Logo/Medallion.webp";
import Ilevel from "../../assets/images/Logo/ilevel.webp";
import UygaBozor from "../../assets/images/Logo/uygabozor.webp";
import Insaat from "../../assets/images/Logo/insaat.webp";
import Elegant from "../../assets/images/Logo/elegant.webp";
import Reventt from "../../assets/images/Logo/REVENTT.webp";
import Kiyim from "../../assets/images/Logo/kiyim.webp";
import Smartlife from "../../assets/images/Logo/smartlive.webp";
import Ailem from "../../assets/images/Logo/ailem.webp";
import Melita from "../../assets/images/Logo/melita.webp";
import luxia from "../../assets/images/Logo/luxia.webp";
import medicare from "../../assets/images/Logo/medicare.webp";
import ImageComponent from "../ImgComponent";
const OurClients = () => {
  const mades = [
    {
      name: "Metallobond",
      src: Metallobond,
    },
    {
      name: "Fidan",
      src: Fidan,
    },
    {
      name: "Medal",
      src: Medal,
    },
    {
      name: "Kiyim",
      src: Kiyim,
    },
    {
      name: "Elegant",
      src: Elegant,
    },
  ];

  const builds = [
    {
      name: "Discover",
      src: Discover,
    },
    {
      name: "GrandTash",
      src: GrandTash,
    },
  ];

  const services = [
    {
      name: "Reventt",
      src: Reventt,
    },
    {
      name: "Ailem",
      src: Ailem,
    },
  ];

  const medics = [
    {
      name: "bp",
      src: bp,
    },
    {
      name: "Sultan",
      src: Sultan,
    },
  ];

  const centers = [
    {
      name: "MediaTech",
      src: MediaTech,
    },
    {
      name: "Bella",
      src: Bella,
    },
    {
      name: "Dono",
      src: Dono,
    },
  ];

  const solds = [
    {
      name: "Asia",
      src: Asia,
    },
    {
      name: "TechnoShop",
      src: TechnoShop,
    },
    {
      name: "Smartlife",
      src: Smartlife,
    },
    {
      name: "Ilevel",
      src: Ilevel,
    },
    {
      name: "Melita",
      src: Melita,
    },
    {
      name: "Insaat",
      src: Insaat,
    },
    {
      name: "luxia",
      src: luxia,
    },
    {
      name: "medicare",
      src: medicare,
    },
    {
      name: "UygaBozor",
      src: UygaBozor,
    },
  ];

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
              <h2 className="client-category-title">Ishlab chiqarish</h2>
              {mades.map((made, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={made.src}
                    alt={made.name}
                  />
                </div>
              ))}
            </li>
             <li className="OurClient-item">
              <h2 className="client-category-title">Qurilish</h2>
              {builds.map((build, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={build.src}
                    alt={build.name}
                  />
                </div>
              ))}
            </li>

            <li className="OurClient-item">
              <h2 className="client-category-title">Servis</h2>
              {services.map((service, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={service.src}
                    alt={service.name}
                  />
                </div>
              ))}
            </li>

            
            <li className="OurClient-item">
              <h2 className="client-category-title">Meditsina</h2>
              {medics.map((medic, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={medic.src}
                    alt={medic.name}
                  />
                </div>
              ))}
            </li>

            <li className="OurClient-item">
              <h2 className="client-category-title">O'quv markazlari</h2>
              {centers.map((center, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={center.src}
                    alt={center.name}
                  />
                </div>
              ))}
            </li>

            <li className="OurClient-item">
              <h2 className="client-category-title">Savdo sotiq</h2>
              {solds.map((sold, index) => (
                <div key={index}>
                  <ImageComponent
                    styles="OurClient-item-img"
                    imageUrl={sold.src}
                    alt={sold.name}
                  />
                </div>
              ))}
            </li>

            
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurClients;
