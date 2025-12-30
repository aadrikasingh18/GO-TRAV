import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <Container>
                <div className="not-found-content">
                    <div className="error-code">404</div>
                    <h1>Page Not Found</h1>
                    <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                    <div className="not-found-actions">
                        <Button className="primaryBtn" onClick={() => navigate("/")}>
                            Go to Home
                        </Button>
                        <Button variant="outline-primary" onClick={() => navigate(-1)}>
                            Go Back
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;

