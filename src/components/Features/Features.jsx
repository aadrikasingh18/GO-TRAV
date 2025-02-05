import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/adventurer.png";
import feature2 from "../../assets/images/feature/hot-deal.png";
import feature3 from "../../assets/images/feature/art-show.png";
import feature4 from "../../assets/images/feature/trust.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    autoplaySpeed:1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow:false,
          nextArrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:false,
          nextArrow:false,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Explore the Possibilities",
      des: "With nearly half a million options, including attractions, hotels, and more, you're bound to discover something that brings you joy. We do the hard work so you don’t have to.",
    },
    {
      id: 1,
      image: feature2,
      title: "Hot Deals and Offer",
      des: "Along with quality, you also enjoy the lowest prices, last-minute availability, and 24/7 support.",
    },
    {
      id: 2,
      image: feature3,
      title: "Savor Every Flavor",
      des: "Whether you're into the unconventional or the popular, a guided tour or a live show, a thrilling game or a museum visit – we've got it all.",
    },

    {
      id: 3,
      image: feature4,
      title: "Trusted Travel Experiences",
      des: "Browse reviews and count on reliable customer support. We’re with you at every step, ensuring your journey is enjoyable, and worry-free, from start to end.",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;