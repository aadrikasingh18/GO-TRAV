import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useApp } from "../../context/AppContext";

const AdvanceSearch = () => {
  const navigate = useNavigate();
  const { updateSearchFilters } = useApp();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState("");

  const selectedLocation = (value) => {
    setLocation(value);
  };

  const handleSearch = () => {
    updateSearchFilters({
      location: location,
      startDate: startDate,
      endDate: endDate
    });
    navigate("/tours");
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  {/*  Using Props to Pass Data */}
                  <CustomDropdown
                    label="Location"
                    onSelect={selectedLocation}
                    options={[
                      "New York",
                      "Dubai",
                      "Delhi",
                      "Tokyo",
                      "Sydney",
                      "Melbourne",
                      "Paris",
                      "Singapore",
                      "London",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check in </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    dateFormat="dd, MMMM, yyyy"
                  // placeholderText="Select check-in date"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check Out </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate || new Date()}
                    dateFormat="dd, MMMM, yyyy"
                  // placeholderText="Select check-out date"
                  />
                </div>
                <div className="item-search bd-none">
                  <Button
                    className="primaryBtn flex-even d-flex justify-content-center"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;