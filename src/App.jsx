import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProductSection from './sections/ProductSection/ProductSection';
import MapSection from './sections/MapSection/MapSection';
import Footer from './components/Footer/Footer';
import './styles/main.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProductSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
