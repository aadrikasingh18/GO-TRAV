import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <Container>
                    <h1>About GoTrav</h1>
                    <p>Your trusted travel companion for unforgettable experiences</p>
                </Container>
            </div>

            <Container>
                <Row className="about-section">
                    <Col md={12}>
                        <h2>Who We Are</h2>
                        <p>
                            GoTrav is a leading travel platform dedicated to helping you discover
                            and book amazing travel experiences around the world. We believe that
                            travel is not just about visiting places, but about creating memories
                            that last a lifetime.
                        </p>
                        <p>
                            With our carefully curated selection of tours, activities, and
                            destinations, we make it easy for you to plan your perfect trip.
                            Whether you're looking for adventure, relaxation, culture, or
                            entertainment, we have something for everyone.
                        </p>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="icon">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <h3>Global Reach</h3>
                                <p>
                                    Explore destinations across the globe with our extensive network
                                    of trusted partners and local experts.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <h3>Trusted & Safe</h3>
                                <p>
                                    All our tours and activities are carefully vetted to ensure
                                    safety, quality, and unforgettable experiences.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="icon">
                                    <i className="bi bi-headset"></i>
                                </div>
                                <h3>24/7 Support</h3>
                                <p>
                                    Our dedicated support team is available around the clock to help
                                    you with any questions or concerns.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col md={12}>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to make travel accessible, enjoyable, and memorable
                            for everyone. We strive to provide exceptional service, competitive
                            prices, and unique experiences that go beyond the ordinary.
                        </p>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col md={12}>
                        <h2>Why Choose Us</h2>
                        <ul className="why-choose-list">
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Wide selection of tours and activities</span>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Best price guarantee</span>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Easy booking process</span>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Flexible cancellation policies</span>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Verified reviews from real travelers</span>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Secure payment options</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;

