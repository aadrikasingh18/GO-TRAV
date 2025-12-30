import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./Booking.css";

const Booking = () => {
    const { cart, removeFromCart, updateCartQuantity, clearCart, getCartTotal } = useApp();
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        paymentMethod: "card"
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingInfo(prev => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // In a real app, this would send order to backend
        console.log("Order placed:", { cart, bookingInfo });
        setOrderPlaced(true);
        clearCart();
        setTimeout(() => {
            navigate("/");
        }, 5000);
    };

    if (cart.length === 0 && !orderPlaced) {
        return (
            <Container className="booking-page">
                <div className="empty-cart">
                    <i className="bi bi-cart-x" style={{ fontSize: "4rem", color: "#ccc" }}></i>
                    <h2>Your cart is empty</h2>
                    <p>Add some tours to your cart to continue booking.</p>
                    <Button className="primaryBtn" onClick={() => navigate("/tours")}>
                        Browse Tours
                    </Button>
                </div>
            </Container>
        );
    }

    if (orderPlaced) {
        return (
            <Container className="booking-page">
                <div className="order-success">
                    <div className="success-icon">
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your booking. We've sent a confirmation email to {bookingInfo.email}</p>
                    <p className="redirect-note">You will be redirected to the home page in a few seconds...</p>
                    <Button className="primaryBtn" onClick={() => navigate("/")}>
                        Go to Home
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <div className="booking-page">
            <Container>
                <div className="page-header">
                    <h1>Complete Your Booking</h1>
                    <p>Review your cart and provide booking information</p>
                </div>

                <Row>
                    <Col md={8}>
                        <Card className="booking-section">
                            <Card.Body>
                                <h2>Booking Information</h2>
                                <Form onSubmit={handlePlaceOrder}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    value={bookingInfo.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    value={bookingInfo.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={bookingInfo.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Phone *</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={bookingInfo.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Address *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={bookingInfo.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>City *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="city"
                                                    value={bookingInfo.city}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Country *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="country"
                                                    value={bookingInfo.country}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Payment Method *</Form.Label>
                                        <Form.Select
                                            name="paymentMethod"
                                            value={bookingInfo.paymentMethod}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="card">Credit/Debit Card</option>
                                            <option value="paypal">PayPal</option>
                                            <option value="bank">Bank Transfer</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <div className="payment-note">
                                        <p><small>Note: This is a demo. No actual payment will be processed.</small></p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="order-summary">
                            <Card.Body>
                                <h3>Order Summary</h3>
                                <div className="cart-items">
                                    {cart.map((item) => (
                                        <div key={item.tour.id} className="cart-item">
                                            <div className="item-info">
                                                <Link to={`/tours/${item.tour.id}`}>
                                                    <h5>{item.tour.title}</h5>
                                                </Link>
                                                <p className="location">
                                                    <i className="bi bi-geo-alt"></i> {item.tour.location}
                                                </p>
                                                <div className="quantity-controls">
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => updateCartQuantity(item.tour.id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="quantity">{item.quantity}</span>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => updateCartQuantity(item.tour.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <p>Rs {(item.tour.afterDiscount || item.tour.price) * item.quantity}</p>
                                                <Button
                                                    variant="link"
                                                    size="sm"
                                                    className="remove-btn"
                                                    onClick={() => removeFromCart(item.tour.id)}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-total">
                                    <div className="total-row">
                                        <span>Subtotal:</span>
                                        <span>Rs {getCartTotal()}</span>
                                    </div>
                                    <div className="total-row">
                                        <span>Tax (10%):</span>
                                        <span>Rs {(getCartTotal() * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="total-row final-total">
                                        <span>Total:</span>
                                        <span>Rs {(getCartTotal() * 1.1).toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button
                                    className="primaryBtn w-100"
                                    onClick={handlePlaceOrder}
                                    disabled={!bookingInfo.firstName || !bookingInfo.email}
                                >
                                    Place Order
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;

