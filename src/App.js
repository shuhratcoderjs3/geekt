import './App.css';
import AboutUs from './components/AboutUs';
import Facts from './components/Facts';
import Header from './components/Header';
import Hero from './components/Hero';
import OurClients from './components/OurClients';
import Reviews from './components/Reviews';
import Services from './components/Services';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Facts />
      <AboutUs />
      <Reviews />
      <OurClients/>
    </>
  );
}

export default App;
