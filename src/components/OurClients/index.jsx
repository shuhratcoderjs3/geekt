import React,{ useState } from "react";



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

  const [types , setTypes ] =  useState(null)
 

  // const mades = [
  //   {
  //     name: "Metallobond",
  //     src: Metallobond,
  //   },
  //   {
  //     name: "Fidan",
  //     src: Fidan,
  //   },
  //   {
  //     name: "Medal",
  //     src: Medal,
  //   },
  //   {
  //     name: "Kiyim",
  //     src: Kiyim,
  //   },
  //   {
  //     name: "Elegant",
  //     src: Elegant,
  //   },
  // ];

  // const builds = [
  //   {
  //     name: "Discover",
  //     src: Discover,
  //   },
  //   {
  //     name: "GrandTash",
  //     src: GrandTash,
  //   },
  // ];

  // const services = [
  //   {
  //     name: "Reventt",
  //     src: Reventt,
  //   },
  //   {
  //     name: "Ailem",
  //     src: Ailem,
  //   },
  // ];

  // const medics = [
  //   {
  //     name: "bp",
  //     src: bp,
  //   },
  //   {
  //     name: "Sultan",
  //     src: Sultan,
  //   },
  // ];

  // const centers = [
  //   {
  //     name: "MediaTech",
  //     src: MediaTech,
  //   },
  //   {
  //     name: "Bella",
  //     src: Bella,
  //   },
  //   {
  //     name: "Dono",
  //     src: Dono,
  //   },
  // ];

  // // const solds = [
  //   {
  //     name: "Asia",
  //     src: Asia,
  //   },
  //   {
  //     name: "TechnoShop",
  //     src: TechnoShop,
  //   },
  //   {
  //     name: "Smartlife",
  //     src: Smartlife,
  //   },
  //   {
  //     name: "Ilevel",
  //     src: Ilevel,
  //   },
  //   {
  //     name: "Melita",
  //     src: Melita,
  //   },
  //   {
  //     name: "Insaat",
  //     src: Insaat,
  //   },
  //   {
  //     name: "luxia",
  //     src: luxia,
  //   },
  //   {
  //     name: "medicare",
  //     src: medicare,
  //   },
  //   {
  //     name: "UygaBozor",
  //     src: UygaBozor,
  //   },
  // // ];


  const click = (type) => {
    setTypes(type)
  }
  // Sh_js code
  const title = [
     {
      name: "Hammasi",
      types: null
    },
    {
      name: "Ishlab chiqarish",
      type: "mades"
    },
    {
      name: "Qurilish",
      type: "builds"
    },
    {
      name: "Servis",
      type: "services"
    },
    {
      name: "Meditsina",
      type: "medics"
    },
    {
      name: "O'quv markazlari",
      type: "centers"
    },
    {
      name: "Savdo sotiq",
      type: "solds"

    },
   

  ]

  const clients = [
    {
      name: "Metallobond",
      src: Metallobond,
      type: "mades"
    },
    {
      name: "Fidan",
      src: Fidan,
      type: "mades"

    },
    {
      name: "Medal",
      src: Medal,
      type: "mades"

    },
    {
      name: "Kiyim",
      src: Kiyim,
      type: "mades"

    },
    {
      name: "Elegant",
      src: Elegant,
      type: "mades"
    },
    {
      name: "Discover",
      src: Discover,
      type: "builds"
    },
    {
      name: "GrandTash",
      src: GrandTash,
      type: "builds"

    },
    {
      name: "Reventt",
      src: Reventt,
      type: "services"
    },
    {
      name: "Ailem",
      src: Ailem,
      type: "services"

    },
    {
      name: "bp",
      src: bp,
      type: "medics"
    },
    {
      name: "Sultan",
      src: Sultan,
      type: "medics"

    },
    {
      name: "MediaTech",
      src: MediaTech,
      type: "centers"
    },
    {
      name: "Bella",
      src: Bella,
      type: "centers"


    },
    {
      name: "Dono",
      src: Dono,
      type: "centers"

    },
    {
      name: "Asia",
      src: Asia,
      type: 'solds'

    },
    {
      name: "TechnoShop",
      src: TechnoShop,
      type: 'solds'

    },
    {
      name: "Smartlife",
      src: Smartlife,
      type: 'solds'

    },
    {
      name: "Ilevel",
      src: Ilevel,
      type: 'solds'

    },
    {
      name: "Melita",
      src: Melita,
      type: 'solds'

    },
    {
      name: "Insaat",
      src: Insaat,
      type: 'solds'

    },
    {
      name: "luxia",
      src: luxia,
      type: 'solds'

    },
    {
      name: "medicare",
      src: medicare,
      type: 'solds'

    },
    {
      name: "UygaBozor",
      src: UygaBozor,
      type: 'solds'
    },
  ]
  const [lang, setLang] = useLocalization();
  return (
    <>
        
      <section className="OurClients-section" id="clients">
        <div className="container">
          <h2 className="OurClients-section-title">
            {languages[lang].Client.client_title}
          </h2>
          <div>
            <ul className={`client-category`} >
               {
                title.map(({name, type}, index) =>{

                //  if(type == null)  return (
                //     <li key={name} onClick={()=> click(type)} className ='active' >
                //        <h3 className="client-category-title" >{name} </h3>
                //   </li>
                //   )
                  
                  return (
                    <li key={name} onClick={()=> click(type)} className ={types == type ?  " active" : '' } >
                      <h3 className="client-category-title" >{name} </h3>
                    </li>
                  )
                })

               }
            </ul>
          </div>
          <ul className="OurClient-list">
            {/* <li className="OurClient-item">
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
            </li> */}

              {
                clients.filter(({name, src, type})=>!types? true : type === types).map(({name, src, type})=>{

                  if (type === types ){ 
                    return  (
                    <li className="OurClient-item" key={name}>
                        <ImageComponent
                        styles="OurClient-item-img"
                        imageUrl={src}
                        alt={name}
                        className={type}
                      />
                    </li>
                  )}

                  return (
                    <li className="OurClient-item" key={name}>
                        <ImageComponent
                        styles="OurClient-item-img"
                        imageUrl={src}
                        alt={name}
                        className={type}
                      />
                    </li>
                  )
                }

                
                )
              }
            
          </ul>
        </div>
      </section>
    </>
   
  )
};

export default OurClients;
