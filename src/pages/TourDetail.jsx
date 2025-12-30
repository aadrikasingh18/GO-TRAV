import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, Tabs, Tab } from "react-bootstrap";
import { getTourById } from "../services/mockData";
import { useApp } from "../context/AppContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TourDetail.css";

// Import tour images
import USS from "../assets/images/popular/Universal Studios Singapore.jpg";
import RWS from "../assets/images/popular/River Wonders Singapore.jpg";
import ZOO from "../assets/images/popular/Singapore Zoo Tickets.jpg";
import SET from "../assets/images/popular/Stonehenge Entry Tickets.jpg";
import BP from "../assets/images/popular/Buckingham Palace.jpg";
import ST from "../assets/images/popular/SkyFeast at Sydney Tower.jpg";

const imageMap = {
    1: USS,
    2: RWS,
    3: ZOO,
    4: SET,
    5: BP,
    6: ST
};

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleFavorite, isFavorite } = useApp();
    const tour = getTourById(id);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    // const [guests, setGuests] = useState("2 adults, 1 children");
    const [quantity, setQuantity] = useState(1);

    if (!tour) {
        return (
            <Container className="tour-detail-page">
                <div className="not-found">
                    <h2>Tour not found</h2>
                    <p>The tour you're looking for doesn't exist.</p>
                    <Button onClick={() => navigate("/tours")}>Back to Tours</Button>
                </div>
            </Container>
        );
    }

    const handleAddToCart = () => {
        addToCart(tour, quantity, startDate, endDate);
        navigate("/booking");
    };

    const handleBookNow = () => {
        addToCart(tour, quantity, startDate, endDate);
        navigate("/booking");
    };

    return (
        <div className="tour-detail-page">
            <Container>
                <div className="breadcrumb-nav">
                    <Link to="/">Home</Link> / <Link to="/tours">Tours</Link> / <span>{tour.title}</span>
                </div>

                <Row>
                    <Col md={8}>
                        <div className="tour-image-section">
                            <img src={imageMap[tour.id] || tour.image} alt={tour.title} className="main-image" />
                            <button
                                className={`favorite-btn ${isFavorite(tour.id) ? "active" : ""}`}
                                onClick={() => toggleFavorite(tour)}
                                aria-label="Add to favorites"
                            >
                                <i className={`bi ${isFavorite(tour.id) ? "bi-heart-fill" : "bi-heart"}`}></i>
                            </button>
                        </div>

                        <div className="tour-info-section">
                            <div className="tour-header">
                                <div>
                                    <p className="location">
                                        <i className="bi bi-geo-alt"></i> {tour.location}
                                    </p>
                                    <h1>{tour.title}</h1>
                                    <div className="rating-badge">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <span>{tour.rating}</span>
                                        <span className="reviews">({tour.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <Tabs defaultActiveKey="overview" className="tour-tabs">
                                <Tab eventKey="overview" title="Overview">
                                    <div className="tab-content">
                                        <p className="description">{tour.description}</p>
                                        <h3>Highlights</h3>
                                        <ul className="highlights-list">
                                            {tour.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tab>

                                <Tab eventKey="details" title="Details">
                                    <div className="tab-content">
                                        <Row>
                                            <Col md={6}>
                                                <h4>Duration</h4>
                                                <p>{tour.duration}</p>
                                                <h4>Days</h4>
                                                <p>{tour.days}</p>
                                            </Col>
                                            <Col md={6}>
                                                <h4>Cancellation Policy</h4>
                                                <p>{tour.cancellation}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="included" title="What's Included">
                                    <div className="tab-content">
                                        <h4>Included:</h4>
                                        <ul>
                                            {tour.included.map((item, index) => (
                                                <li key={index} className="included-item">
                                                    <i className="bi bi-check-circle-fill text-success"></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <h4 className="mt-4">Not Included:</h4>
                                        <ul>
                                            {tour.notIncluded.map((item, index) => (
                                                <li key={index} className="not-included-item">
                                                    <i className="bi bi-x-circle text-danger"></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>

                    <Col md={4}>
                        <Card className="booking-card">
                            <Card.Body>
                                <div className="price-section">
                                    {tour.afterDiscount && (
                                        <span className="original-price">Rs {tour.price.toFixed(2)}</span>
                                    )}
                                    <h2 className="current-price">
                                        Rs {tour.afterDiscount || tour.price}
                                    </h2>
                                    <p className="price-note">per person</p>
                                </div>

                                <div className="booking-form">
                                    <div className="form-group">
                                        <label>Check In</label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={new Date()}
                                            dateFormat="dd MMMM, yyyy"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Check Out</label>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            dateFormat="dd MMMM, yyyy"
                                            className="form-control"
                                        />
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Guests</label>
                                        <select
                                            className="form-control"
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                        >
                                            <option>2 adults, 1 children</option>
                                            <option>2 adults, 2 children</option>
                                            <option>2 adults, 3 children</option>
                                            <option>4 adults</option>
                                        </select>
                                    </div> */}

                                    <div className="form-group">
                                        <label>Person</label>
                                        <div className="quantity-selector">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            >
                                                -
                                            </Button>
                                            <span>{quantity}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => setQuantity(quantity + 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="categories">
                                        {tour.category.map((cat, index) => (
                                            <Badge key={index} bg="secondary" className="me-1">
                                                {cat}
                                            </Badge>
                                        ))}
                                    </div>

                                    <Button
                                        className="primaryBtn w-100 mb-2"
                                        onClick={handleBookNow}
                                    >
                                        Book Now
                                    </Button>
                                    <Button
                                        variant="outline-primary"
                                        className="w-100"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourDetail;