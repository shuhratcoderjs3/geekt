import './App.css';
import AboutUs from './components/AboutUs';
import Facts from './components/Facts';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <Reviews/>
    </>
  );
}

export default App;
