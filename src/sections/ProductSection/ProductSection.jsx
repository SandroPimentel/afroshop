import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import './productsection.scss'; 
import imageBijoux from '../../images/bijouxImages/bijoux.webp'
import imageEpicerie from '../../images/epicerieImages/epicerie.webp';
import imageSacs from '../../images/sacsImages/sacs.webp';
import imageCoiffure from '../../images/coiffureImages/coiffure.webp';
import imageBeaute from '../../images/beauteImages/beaute.webp';





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
    afterChange: current => setActiveIndex(current), 
    responsive: [
      {
        breakpoint: 838,
        settings: {
          slidesToShow: 1, // Modifiez cette ligne pour afficher une seule card
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: '0px', // Ajustez si nécessaire
          arrows: true // Assurez-vous que les flèches sont affichées
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      title: "Bijoux",
      description: "Parcourez nos bijoux uniques conçus avec des motifs culturels exotiques",
      imageUrl: imageBijoux, // Used for the src attribute as a fallback
    },
    {
      id: 2,
      title: "Epicerie",
      description: "Plongez dans une variété d'épices exotiques qui éveilleront vos papilles et apporteront des saveurs uniques à votre cuisine",
      imageUrl: imageEpicerie, // Used for the src attribute as a fallback
    },
    {
      id: 3,
      title: "Coiffure",
      description: "Découvrez des styles capillaires tendance et exotiques",
      imageUrl: imageCoiffure, // Used for the src attribute as a fallback
    },
    {
      id: 4,
      title: "Beauté",
      description: "Offrez à votre peau et à vos cheveux des soins exceptionnels avec notre gamme de produits",
      imageUrl: imageBeaute, // Used for the src attribute as a fallback

    },
    {
      id: 5,
      title: "Vêtements",
      description: "Explorez notre collection unique de vêtements inspirés par des cultures exotiques",
      imageUrl: imageSacs, // Used for the src attribute as a fallback
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
