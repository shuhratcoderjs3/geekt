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
  const clients = [
    {
      name: "TechnoShop",
      src: TechnoShop,
    },
    {
      name: "bp",
      src: bp,
    },
    {
      name: "Dono",
      src: Dono,
    },
    {
      name: "status",
      src: status,
    },
    {
      name: "Metallobond",
      src: Metallobond,
    },
    {
      name: "Sultan",
      src: Sultan,
    },
    {
      name: "Do",
      src: Do,
    },
    {
      name: "Asia",
      src: Asia,
    },
    {
      name: "Fidan",
      src: Fidan,
    },
    {
      name: "MediaTech",
      src: MediaTech,
    },
    {
      name: "Bella",
      src: Bella,
    },
    {
      name: "Discover",
      src: Discover,
    },
    {
      name: "GrandTash",
      src: GrandTash,
    },
    {
      name: "Medal",
      src: Medal,
    },
    {
      name: "Ilevel",
      src: Ilevel,
    },
    {
      name: "UygaBozor",
      src: UygaBozor,
    },
    {
      name: "Insaat",
      src: Insaat,
    },
    {
      name: "Elegant",
      src: Elegant,
    },
    {
      name: "Reventt",
      src: Reventt,
    },
    {
      name: "Kiyim",
      src: Kiyim,
    },
    {
      name: "Smartlife",
      src: Smartlife,
    },
    {
      name: "Ailem",
      src: Ailem,
    },
    {
      name: "Melita",
      src: Melita,
    },
    {
      name: "luxia",
      src: luxia,
    },
    {
      name: "medicare",
      src: medicare,
    },
    // Add other image objects here
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
            {clients.map((client, index) => (
              <li key={index} className="OurClient-item">
                <ImageComponent styles="OurClient-item-img" imageUrl={client.src} alt={client.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurClients;
