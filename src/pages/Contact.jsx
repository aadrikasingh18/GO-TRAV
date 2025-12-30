import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to backend
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <Container>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Get in touch with us!</p>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col md={8}>
                        <Card className="contact-form-card">
                            <Card.Body>
                                <h2>Send us a Message</h2>
                                {submitted && (
                                    <div className="alert alert-success">
                                        Thank you! Your message has been sent. We'll get back to you soon.
                                    </div>
                                )}
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Your name"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="your.email@example.com"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 234 567 8900"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Subject *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="What is this regarding?"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Message *</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </Form.Group>

                                    <Button type="submit" className="primaryBtn">
                                        Send Message
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <div className="contact-info">
                            <Card className="info-card">
                                <Card.Body>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div>
                                            <h4>Address</h4>
                                            <p>123 Travel Street<br />Tourism City, TC 12345<br />Country</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className="info-card">
                                <Card.Body>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>
                                                <a href="tel:+1234567890">+1 (234) 567-8900</a>
                                            </p>
                                            <p>
                                                <a href="tel:+1234567891">+1 (234) 567-8901</a>
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className="info-card">
                                <Card.Body>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>
                                                <a href="mailto:info@gotrav.com">info@gotrav.com</a>
                                            </p>
                                            <p>
                                                <a href="mailto:support@gotrav.com">support@gotrav.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className="info-card">
                                <Card.Body>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-clock-fill"></i>
                                        </div>
                                        <div>
                                            <h4>Business Hours</h4>
                                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;

