import React from 'react';
import styles from './navbar.module.scss';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><ScrollLink to="home" smooth={true}>Accueil</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true}>À Propos</ScrollLink></li>
        <li><ScrollLink to="products" smooth={true}>Nos Produits</ScrollLink></li>
        <li><ScrollLink to="map" smooth={true}>Map</ScrollLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
