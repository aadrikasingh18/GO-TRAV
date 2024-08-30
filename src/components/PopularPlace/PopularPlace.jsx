import React from "react";
import "../PopularPlace/popular-place.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

import USS from "../../assets/images/popular/Universal Studios Singapore.jpg";
import RWS from "../../assets/images/popular/River Wonders Singapore.jpg";
import ZOO from "../../assets/images/popular/Singapore Zoo Tickets.jpg";
import SET from "../../assets/images/popular/Stonehenge Entry Tickets.jpg";
import BP from "../../assets/images/popular/Buckingham Palace.jpg";
import ST from "../../assets/images/popular/SkyFeast at Sydney Tower.jpg";


const PopularPlace = () => {
  

  const populars = [
    {
      id: 0,
      tilte: "Universal Studios Singapore",
      image: USS,
      location: "Singapore",
      category: ["Tour & Cruise"],
      days: "1 day",
      price: 6000,
      afterDiscount: 5500,
      rating: 4.2,
      reviews: 5,
    },
    {
      id: 1,
      tilte: "River Wonders Singapore",
      image: RWS,
      location: "Singapore",
      category: ["Wildlife"],
      days: "1 day",
      price: 2800,
      afterDiscount: 2500,
      rating: 4,
      reviews: 9,
    },
    {
      id: 2,
      tilte: "Singapore Zoo Tickets",
      image: ZOO,
      location: "Singapore",
      category: ["Escorted Tour"],
      days: "1 day",
      price: 3100,
      afterDiscount: 3000,
      rating: 4.5,
      reviews: 9,
    },
    {
      id: 3,
      tilte: "Stonehenge Entry Tickets",
      image: SET,
      location: "London",
      category: ["Escorted Tour"],
      days: "2 day",
      price: 4100,
      afterDiscount: 3800,
      rating: 4.5,
      reviews: 11,
    },
    {
      id: 4,
      tilte: "Buckingham Palace",
      image: BP,
      location: "London",
      category: ["Escorted Tour"],
      days: "1 day",
      price: 2000,
      afterDiscount: 1800,
      rating: 4,
      reviews: 19,
    },
    {
      id: 5,
      tilte: "SkyFeast at Sydney Tower",
      image: ST,
      location: "Sydney",
      category: ["Escorted Tour"],
      days: "1 day",
      price: 4000,
      afterDiscount: 3500,
      rating: 4.8,
      reviews: 12,
    },
  ];

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Our Top Recommendations </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {populars.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <Card className="rounded-2 shadow-sm">
              <Card.Img
                variant="top"
                src={val.image}
                className="img-fluid"
                alt={"image"}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text">{val.location}</span>
                </Card.Text>
                <Card.Title> {val.tilte} </Card.Title>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{val.rating} </span>
                  <span>( {val.reviews} reviews )</span>
                </p>
                {val.category.map((cat, index)=>{
                  return(
                    <span key={index} 
                    className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                  )
                })}
                
              </Card.Body>

              <Card.Footer className="py-4">
                {val.afterDiscount ? (
                  <p className="text-decoration-line-through"> Rs{val.price.toFixed(2)}</p>
                ): ""}
               
                <Stack
                  direction="horizontal"
                  className="justify-content-between  mt-3"
                >
                  <p>
                    From Rs <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b>
                  </p>
                  <p>
                  
                    <i className="bi bi-clock"></i> {val.days}
                  </p>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;
