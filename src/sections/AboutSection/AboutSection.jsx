import React from 'react';
import styles from './aboutsection.module.scss';
import AboutImage256 from '../../images/aboutImages/resized_256x256.webp';
import AboutImage720 from '../../images/aboutImages/resized_720x720.webp';
import AboutImage980 from '../../images/aboutImages/resized_980x980.webp';
import AboutImage1300 from '../../images/aboutImages/resized_1300x1300.webp';
import AboutImage1550 from '../../images/aboutImages/resized_1550x1550.webp';
import AboutImage1770 from '../../images/aboutImages/resized_1770x1770.webp';
import AboutImage1960 from '../../images/aboutImages/resized_1960x1960.webp';


const AboutSection = () => {

  return (
    <section className={styles.about} id="about">
      <h1>À propos de Afroshop</h1>
      <div className={styles.content}>
          <img 
            className={styles.imgAbsolute} 
            srcSet={`
              ${AboutImage256} 256w,
              ${AboutImage720} 720w,
              ${AboutImage980} 980w,
              ${AboutImage1300} 1300w,
              ${AboutImage1550} 1550w,
              ${AboutImage1770} 1770w,
              ${AboutImage1960} 1960w
            `}
            sizes="(min-width: 1240px) 20.11vw, (min-width: 1160px) calc(-30vw + 611px), (min-width: 960px) calc(-18.33vw + 472px), (min-width: 860px) calc(-45vw + 719px), (min-width: 780px) calc(-61.67vw + 849px), (min-width: 660px) calc(-55vw + 785px), (min-width: 560px) calc(-68.75vw + 862px), (min-width: 340px) calc(83.5vw + 45px), calc(-330vw + 1376px)"
            src={AboutImage1960} 
            alt='art de profil de dame africaine'
          />
        <div className='texte'>
        <p>Notre boutique exotique, fondée avec passion par Rose . Originaire du Togo, Rose  a choisi de partager la richesse de sa culture à travers une sélection minutieuse de produits africains. Chaque article raconte une histoire, offrant ainsi une expérience authentique et personnelle à chaque visiteur de notre boutique.</p>
        <p>Explorez l'authenticité de l'Afrique dans notre boutique exotique, où la richesse des couleurs, des saveurs et de l'artisanat vous transporte vers un voyage sensoriel unique. Découvrez une collection captivante de produits africains, alliant tradition et modernité, pour une expérience de shopping inoubliable.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
