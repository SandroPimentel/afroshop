import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import './productsection.scss'; 
import imageBijoux528 from '../../images/bijouxImages/bijoux_528x351.webp';
import imageBijoux1056 from '../../images/bijouxImages/bijoux_1056x703.webp';
import imageEpicerie528 from '../../images/epicerieImages/epicerie_528x351.webp';
import imageEpicerie1056 from '../../images/epicerieImages/epicerie_1056x703.webp';
import imageSacs528 from '../../images/sacsImages/sacs_528x299.webp';
import imageSacs1056 from '../../images/sacsImages/sacs_1056x598.webp';
import imageCoiffure528 from '../../images/coiffureImages/coiffure_528x396.webp';
import imageCoiffure1056 from '../../images/coiffureImages/coiffure_1056x792.webp';





const ProductSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 

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
    afterChange: current => setActiveIndex(current) 
  };

  const products = [
    {
      id: 1,
      title: "Bijoux",
      description: "Description pour bijoux",
      imageUrl: imageBijoux528, 
      srcSet: `${imageBijoux528} 528w, ${imageBijoux1056} 1056w`,
      sizes: "(max-width: 528px) 528px, 1056px"
    },
    {
      id: 2,
      title: "Epicerie",
      description: "Description pour épicerie",
      imageUrl: imageEpicerie528,
      srcSet: `${imageEpicerie528} 528w, ${imageEpicerie1056} 1056w`,
      sizes: "(max-width: 528px) 528px, 1056px"
    },
    {
      id: 3,
      title: "Coiffure",
      description: "Description pour coiffure",
      imageUrl: imageCoiffure528,
      srcSet: `${imageCoiffure528} 528w, ${imageCoiffure1056} 1056w`,
      sizes: "(max-width: 528px) 528px, 1056px"
    },
    {
      id: 4,
      title: "Beauté",
      description: "Description pour sacs",
      imageUrl: imageSacs528,
      srcSet: `${imageSacs528} 528w, ${imageSacs1056} 1056w`,
      sizes: "(max-width: 528px) 528px, 1056px"
    },
    {
      id: 4,
      title: "Vêtements",
      description: "Description pour sacs",
      imageUrl: imageSacs528,
      srcSet: `${imageSacs528} 528w, ${imageSacs1056} 1056w`,
      sizes: "(max-width: 528px) 528px, 1056px"
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
