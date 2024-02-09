import React, { useEffect, useState } from 'react';
import styles from './homesection.module.scss'; 
import { Link as ScrollLink } from 'react-scroll';
import Arrow from '../../images/arrow.svg'

const HomeSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${styles.home} ${isLoaded ? styles.loaded : ''}`} id="home">
      <div className={styles.container}> 
        <h1>Bienvenue chez Afroshop</h1>
        <div className={styles.subtitleAndButton}> {/* Nouvelle div pour le sous-titre et le bouton */}
          <p>Découvrez une collection exceptionnelle de produits qui célèbrent la riche culture africaine.</p>
          <ScrollLink to="map" className={styles['cta-button']} smooth={true}>Notre Boutique</ScrollLink>
        </div>
      </div>
      <ScrollLink className={`${styles['down-button']} ${isLoaded ? styles.loaded : ''}`} to="products" smooth={true}>
        <span className={styles.icon}>
          <img src={Arrow} className={styles.arrow} alt="arrow" />
        </span>
        <span className={styles.text}>Nos produits</span>
      </ScrollLink>
    </section>
  );
};

export default HomeSection;
