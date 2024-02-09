import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import './productsection.scss'; 
import imageBijoux from '../../images/bijoux.webp';
import imageEpicerie from '../../images/epicerie.webp';
import imageCoiffure from '../../images/coiffure.webp';
import imageSacs from '../../images/sacs.webp';

const ProductSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Initialisez à 0 ou à l'index de départ souhaité

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: current => setActiveIndex(current) // Ajoutez cette ligne
  };

  const products = [
    {
      id: 1,
      title: "Bijoux",
      description: "Description for product bijoux",
      imageUrl: imageBijoux
    },
    {
      id: 2,
      title: "Epicerie",
      description: "Description for product epicereie",
      imageUrl: imageEpicerie
    },
    {
      id: 3,
      title: "Coiffure",
      description: "Description for product coiffure",
      imageUrl: imageCoiffure
    },
    {
      id: 4,
      title: "Sacs",
      description: "Description for product sacs",
      imageUrl: imageSacs
    }
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
  }

  const navigateToSlide = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <section className="products" id="products">
      <h1>Nos produits</h1>
      <div className="navigationButtons">
        {products.map((product, index) => (
          <button
            key={product.id}
            className={index === activeIndex ? "activeButton" : ""}
            onClick={() => navigateToSlide(index)}
          >
            {product.title}
          </button>
        ))}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </Slider>
    </section>
  );
};

export default ProductSection;
