

import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import './HungryChildrenGallery.css';
import img from "../Assets/2.jpg"
import img1 from "../Assets/3.jpg"
import img3 from "../Assets/4.jpg"
import img4 from "../Assets/5.jpg"
import img5 from "../Assets/6.jpg"
import img6 from "../Assets/7.jpg"
const HungryChildrenGallery = () => {
  const [images, setImages] = useState([
    { source: img , alt: 'Hungry Child 1', title: 'Hungry Child ' },
    { source: img1, alt: 'Hungry Child 1', title: 'Hungry Child ' },
    { source: img6, alt: 'Hungry Child 1', title: 'Hungry Child ' },
    { source: img3, alt: 'Hungry Child 1', title: 'Hungry Child ' },
    { source: img4, alt: 'Hungry Child 1', title: 'Hungry Child ' },
    { source: img5, alt: 'Hungry Child 1', title: 'Hungry Child ' },
  

  ]);

  return (
    <div className="hungry-children-gallery">
      <Carousel value={images} itemTemplate={imageTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} />
    </div>
  );
};

const imageTemplate = (image) => {
  return (
    <div className="gallery-item">
      <img src={image.source} alt={image.alt} />
      <div className="overlay">
        <span>{image.title}</span>
      </div>
    </div>
  );
};

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1,
  },
];

export default HungryChildrenGallery;
