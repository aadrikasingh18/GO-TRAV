import React from "react";
import { Link } from "react-router-dom";
import "../PopularPlace/popular-place.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { mockTours } from "../../services/mockData";

import USS from "../../assets/images/popular/Universal Studios Singapore.jpg";
import RWS from "../../assets/images/popular/River Wonders Singapore.jpg";
import ZOO from "../../assets/images/popular/Singapore Zoo Tickets.jpg";
import SET from "../../assets/images/popular/Stonehenge Entry Tickets.jpg";
import BP from "../../assets/images/popular/Buckingham Palace.jpg";
import ST from "../../assets/images/popular/SkyFeast at Sydney Tower.jpg";

const PopularPlace = () => {
  // Map mockTours to include imported images
  const imageMap = {
    1: USS,
    2: RWS,
    3: ZOO,
    4: SET,
    5: BP,
    6: ST
  };

  const populars = mockTours.map(tour => ({
    ...tour,
    image: imageMap[tour.id] || tour.image
  }));

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
          {populars.map((val, inx) => {
            return (
              <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                <Card className="rounded-2 shadow-sm tour-card-link">
                  <Link to={`/tours/${val.id}`}>
                    <Card.Img
                      variant="top"
                      src={val.image}
                      className="img-fluid"
                      alt={val.title}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Text>
                      <i className="bi bi-geo-alt"></i>
                      <span className="text">{val.location}</span>
                    </Card.Text>
                    <Card.Title>
                      <Link to={`/tours/${val.id}`} className="tour-link">
                        {val.title}
                      </Link>
                    </Card.Title>
                    <p className="reviwe">
                      <span>
                        <i className="bi bi-star-fill me-1 text-warning"></i>
                      </span>
                      <span>{val.rating} </span>
                      <span>( {val.reviews} reviews )</span>
                    </p>
                    {val.category.map((cat, index) => {
                      return (
                        <span key={index}
                          className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                      )
                    })}

                  </Card.Body>

                  <Card.Footer className="py-4">
                    {val.afterDiscount ? (
                      <p className="text-decoration-line-through"> Rs{val.price.toFixed(2)}</p>
                    ) : ""}

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
