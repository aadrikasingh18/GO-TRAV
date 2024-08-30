import React from "react";
import Banner from "../components/Banner/Banner";
import AdvanceSearch from "../components/AdvanceSearch/AdvanceSearch";
import Features from "../components/Features/Features";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import tour1 from "../assets/images/tour/tour-1.jpg";
import tour2 from "../assets/images/tour/tour-2.jpg";
import tour3 from "../assets/images/tour/tour-3.jpg";
import tour4 from "../assets/images/tour/tour-4.jpg";
import tour5 from "../assets/images/tour/tour-5.jpg";
import tour6 from "../assets/images/tour/tour-6.jpg";
import tour7 from "../assets/images/tour/tour-7.jpg";
import tour8 from "../assets/images/tour/tour-8.jpg";
import PopularPlace from "../components/PopularPlace/PopularPlace";


const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const destinations = [
    {
      id: 0,
      name: "New York, USA",
      tours: "5 activities",
      image: tour1,
      link: "tour-name",
      shortDes: "",
      // link: "/tour",
      location: "New York",
    },
    {
      id: 1,
      name: "Paris, France",
      tours: "3 activities",
      image: tour2,
      shortDes: "",
      // link: "/tour",
      location: "Paris",
    },
    {
      id: 2,
      name: "Delhi, India",
      tours: "7 activities",
      image: tour3,
      shortDes: "",
      // link: "/tour",
      location: "Delhi",
    },
    {
      id: 3,
      name: "Interlaken, Switzerland",
      tours: "3 activities",
      image: tour4,
      shortDes: "",
      // link: "/tour",
      location: "New York",
    },
    {
      id: 4,
      name: "Singapore",
      tours: "7 activities",
      image: tour5,
      shortDes: "",
      // link: "/tour",
      location: "Singapore",
    },
    {
      id: 5,
      name: "Dubai, UAE",
      tours: "6 activities",
      image: tour6,
      shortDes: "",
      // link: "/tour",
      location: "Dubai",
    },
    {
      id: 6,
      name: "Sydney, Australia",
      tours: "3 activities",
      image: tour7,
      shortDes: "",
      // link: "/tour",
      location: "Sydney",
    },
    {
      id: 7,
      name: "London, United Kingdom",
      tours: "2 activities",
      image: tour8,
      shortDes: "",
      // link: "/tour",
      location: "London",
    },
  ];

  return (
    <>
      <Banner />

      <AdvanceSearch />
      
      <Features />

      {/* tour seciton start */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destinations For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinations.map((destination, inx) => {
                  return (
                    <div className="img-box" key={inx}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={destination.image}
                          className="img-fluid"
                          alt={destination.name}
                        />
                        <Card.Title>{destination.name}</Card.Title>

                        <span className="tours">{destination.tours}</span>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}

      <PopularPlace />

      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
              </h2>
              {/* <p className="text">
                
              </p> */}
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>
    </>
  );
};

export default Home;