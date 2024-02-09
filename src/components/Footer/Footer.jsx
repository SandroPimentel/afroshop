import React from 'react';
import styles from './footer.module.scss';
import WULogo from '../../images/wu-logo.webp'
import SumupLogo from '../../images/sumup-logo.webp'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection1}>
          <h3>Contactez-nous</h3>
          <p>Adresse : 24 Route de Gourdon, Le Vigan 46300</p>
          <p>
            Téléphone : <a href="tel:+33652519571">+33 6 52 51 95 71</a>
          </p>
          <p>Email : contact@afroshop.com</p>
        </div>
        <div className={styles.footerSection2}>
          <h3>Modes de paiement</h3>
          <p>Nous acceptons les paiements par :</p>
          <ul>
            <li>Carte bancaire</li>
            <li>Western Union <img src={WULogo}/></li>
            <li>Sumup <img src={SumupLogo}/></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Afroshop. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
