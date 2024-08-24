import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg1 from "../../assets/images/slider/1.jpg";
import sliderImg2 from "../../assets/images/slider/2.jpg";
import sliderImg3 from "../../assets/images/slider/3.jpg";
import sliderImg4 from "../../assets/images/slider/4.jpg";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="Second slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  IT'S A BIG WORLD OUT THERE <span>GO AND EXPLORE</span>
                </h5>
                {/* <p className="sub_text">
                </p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEGIN YOUR JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                {/* <p className="sub_text">
                </p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg3} className="d-block w-100" alt="Third slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  LIFE IS SHORT AND <span>THE WORLD IS WIDE</span>
                </h5>
                {/* <p className="sub_text">
                </p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg4} className="d-block w-100" alt="Third slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  READY FOR THE <span>ADVENTURE?</span>
                </h5>
                {/* <p className="sub_text">
                </p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;