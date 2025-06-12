import React, { useState } from 'react';
import BannerImage from './sections/BannerImage';

import Container from '../../components/card/container';
import Childbanner from './sections/Childbanner';
import Service from './sections/Service';
import Venues from './sections/venues';
import Footer from '../../components/foot';
import { Dropdown } from 'react-bootstrap';
import Intro from './sections/Intro';
function Homepage() {
  const [isOpen, setIsOPen] = useState(false)

  const servicesData = [
    {
      title: "Photography",
      description: "Professional photographers to capture your special moments.",
      imageUrl: "images/photo.jpg",
    },
    {
      title: "Catering",
      description: "Delicious and customizable catering options for all your events.",
      imageUrl: "images/catering (2).jpg"
    },
    {
      title: "Stage Decoration",
      description: "Stunning decor and event setup to create an unforgettable ambiance.",
      imageUrl: "images/stage.webp"
    },
    {
      title: "Tent Decor & Setup",
      description: "Stunning decor and event setup to create an unforgettable ambiance.",
      imageUrl: "images/tent.jpg"
    },
    {
      title: "Sound Bands",
      description: "High-energy live performances from diverse sound bands, perfect for any event.",
      imageUrl: "images/artist.jpg"
    },
    {
      title: "Performers",
      description: "Engaging solo performers and acts, delivering unforgettable entertainment for any occasion.",
      imageUrl: "images/Ballerina  Violinist.jpg"
    }

  ];

  return (
    <div>
      <BannerImage />
      <Container />
      <Intro/>
      <Childbanner/>
      <Service services={servicesData} />

      <Venues />
    </div>
  );
}

export default Homepage;
