import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Facts from "./components/Facts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./components/Modal";
import {useLocalization} from "./hooks/useLocalization"
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Modal />
      <Services />
      <Facts />
      <AboutUs />
      <Reviews />
      <OurClients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
