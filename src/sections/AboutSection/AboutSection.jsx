import React from 'react';
import styles from './aboutsection.module.scss';
import AboutImage from '../../images/about-img.webp'

const AboutSection = () => {

  return (
    <section className={styles.about} id="about">
      <h1>À propos de Afroshop</h1>
      <div className={styles.content}>
        <div className={styles.imagePlaceholder}></div> {/* Espace réservé pour l'image */}
        <img className={styles.imgAbsolute} src={AboutImage} alt='africa'/> {/* Image absolue */}
        <div className='texte'>
        <p>Integer tempus nibh mauris, et hendrerit ante vestibulum ut. In consectetur aliquet augue in bibendum. Phasellus aliquet iaculis lorem, id rutrum dui egestas ac. Aliquam facilisis lacus arcu, id semper diam semper sed. Mauris a quam et turpis gravida rhoncus. Aliquam at lectus tincidunt, tincidunt massa at, pellentesque elit. Nullam varius pulvinar ligula nec ullamcorper. Nunc vel nisl quis dui commodo elementum ut nec lacus. Praesent quam enim, fermentum nec elit ultrices, sagittis eleifend lorem. Donec urna massa, suscipit vitae accumsan eu, dapibus at sapien. Ut placerat vulputate mattis. Etiam at ligula eget orci varius maximus vel sit amet orci. Sed imperdiet nibh eget enim congue facilisis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus commodo urna, non vulputate ipsum convallis at. Nam et semper mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit libero magna, ut gravida velit mattis hendrerit. Aliquam nunc quam, hendrerit at nulla eget, volutpat finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel pretium nunc.</p>
        </div>
        </div>
    </section>
  );
};

export default AboutSection;
