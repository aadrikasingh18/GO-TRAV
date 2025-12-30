import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { mockTours, filterTours } from "../services/mockData";
import { useApp } from "../context/AppContext";
import "./Tours.css";

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

const Tours = () => {
    const [searchParams] = useSearchParams();
    const { searchFilters, updateSearchFilters } = useApp();
    const [tours, setTours] = useState(mockTours);
    const [filters, setFilters] = useState({
        location: searchParams.get("location") || "",
        category: "",
        minPrice: "",
        maxPrice: "",
        minRating: ""
    });

    useEffect(() => {
        // Check URL params first, then context
        const locationParam = searchParams.get("location");
        const locationToUse = locationParam || searchFilters.location;

        if (locationToUse || searchFilters.category) {
            const filtered = filterTours({
                location: locationToUse,
                category: searchFilters.category,
                minPrice: searchFilters.minPrice,
                maxPrice: searchFilters.maxPrice,
                minRating: searchFilters.minRating
            });
            setTours(filtered);
            if (locationParam) {
                setFilters(prev => ({ ...prev, location: locationParam }));
            }
        } else {
            setTours(mockTours);
        }
    }, [searchFilters, searchParams]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        const filterParams = {
            location: filters.location || undefined,
            category: filters.category || undefined,
            minPrice: filters.minPrice ? parseInt(filters.minPrice) : undefined,
            maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : undefined,
            minRating: filters.minRating ? parseFloat(filters.minRating) : undefined
        };

        updateSearchFilters(filterParams);
        const filtered = filterTours(filterParams);
        setTours(filtered);
    };

    const clearFilters = () => {
        setFilters({
            location: "",
            category: "",
            minPrice: "",
            maxPrice: "",
            minRating: ""
        });
        updateSearchFilters({
            location: "",
            category: "",
            minPrice: null,
            maxPrice: null,
            minRating: null
        });
        setTours(mockTours);
    };

    return (
        <div className="tours-page">
            
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="page-header">
                            <h1>Explore All Tours</h1>
                            <p>Discover amazing destinations and experiences</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <div className="filters-sidebar">
                            <h3>Filters</h3>

                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    placeholder="Enter location"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    name="category"
                                    value={filters.category}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Categories</option>
                                    <option value="Tour & Cruise">Tour & Cruise</option>
                                    <option value="Wildlife">Wildlife</option>
                                    <option value="Escorted Tour">Escorted Tour</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Min Price (Rs)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="minPrice"
                                    placeholder="Min price"
                                    value={filters.minPrice}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Max Price (Rs)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="maxPrice"
                                    placeholder="Max price"
                                    value={filters.maxPrice}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Min Rating</Form.Label>
                                <Form.Select
                                    name="minRating"
                                    value={filters.minRating}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Any Rating</option>
                                    <option value="4.5">4.5+ Stars</option>
                                    <option value="4.0">4.0+ Stars</option>
                                    <option value="3.5">3.5+ Stars</option>
                                </Form.Select>
                            </Form.Group>

                            <div className="filter-buttons">
                                <Button className="primaryBtn w-100 mb-2" onClick={applyFilters}>
                                    Apply Filters
                                </Button>
                                <Button variant="outline-secondary" className="w-100" onClick={clearFilters}>
                                    Clear All
                                </Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={9}>
                        <div className="tours-results">
                            <p className="results-count">{tours.length} tours found</p>

                            <Row>
                                {tours.length > 0 ? (
                                    tours.map((tour) => (
                                        <Col md={6} lg={4} key={tour.id} className="mb-4">
                                            <Card className="tour-card h-100">
                                                <Link to={`/tours/${tour.id}`}>
                                                    <Card.Img
                                                        variant="top"
                                                        src={imageMap[tour.id] || tour.image}
                                                        className="tour-image"
                                                        alt={tour.title}
                                                    />
                                                </Link>
                                                <Card.Body>
                                                    <Card.Text className="location-text">
                                                        <i className="bi bi-geo-alt"></i>
                                                        <span>{tour.location}</span>
                                                    </Card.Text>
                                                    <Card.Title>
                                                        <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                                                    </Card.Title>
                                                    <div className="rating-section">
                                                        <span>
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            {tour.rating}
                                                        </span>
                                                        <span className="reviews">({tour.reviews} reviews)</span>
                                                    </div>
                                                    <div className="categories">
                                                        {tour.category.map((cat, index) => (
                                                            <Badge key={index} bg="secondary" className="me-1">
                                                                {cat}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="price-section">
                                                        {tour.afterDiscount && (
                                                            <span className="original-price">
                                                                Rs {tour.price.toFixed(2)}
                                                            </span>
                                                        )}
                                                        <span className="current-price">
                                                            From Rs <strong>{tour.afterDiscount || tour.price}</strong>
                                                        </span>
                                                    </div>
                                                    <div className="duration">
                                                        <i className="bi bi-clock"></i> {tour.days}
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))
                                ) : (
                                    <Col md={12}>
                                        <div className="no-results">
                                            <p>No tours found matching your criteria.</p>
                                            <Button variant="primary" onClick={clearFilters}>
                                                Clear Filters
                                            </Button>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tours;