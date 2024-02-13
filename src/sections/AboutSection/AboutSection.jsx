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
      <div className={styles.imagePlaceholder}> 
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
            alt='african lady profile art'
          />
        </div>
        <div className='texte'>
        <p>Integer tempus nibh mauris, et hendrerit ante vestibulum ut. In consectetur aliquet augue in bibendum. Phasellus aliquet iaculis lorem, id rutrum dui egestas ac. Aliquam facilisis lacus arcu, id semper diam semper sed. Mauris a quam et turpis gravida rhoncus. Aliquam at lectus tincidunt, tincidunt massa at, pellentesque elit. Nullam varius pulvinar ligula nec ullamcorper. Nunc vel nisl quis dui commodo elementum ut nec lacus. Praesent quam enim, fermentum nec elit ultrices, sagittis eleifend lorem. Donec urna massa, suscipit vitae accumsan eu, dapibus at sapien. Ut placerat vulputate mattis. Etiam at ligula eget orci varius maximus vel sit amet orci. Sed imperdiet nibh eget enim congue facilisis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus commodo urna, non vulputate ipsum convallis at. Nam et semper mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit libero magna, ut gravida velit mattis hendrerit. Aliquam nunc quam, hendrerit at nulla eget, volutpat finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel pretium nunc.</p>
        </div>
        </div>
    </section>
  );
};

export default AboutSection;
