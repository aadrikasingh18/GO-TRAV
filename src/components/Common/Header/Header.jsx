import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky')
  }

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">

          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/">
              Go Trav <i className="fab fa-typo3" />
            </NavLink>
          </Navbar.Brand>

          {/* End Logo Section */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/* mobile Logo Section */}
            <Offcanvas.Header>
              <h1 className="logo">Go Trav</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/* End of Mobile Logo Section */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <a className="nav-link" href="#home">
                  Home
                </a>

                <a className="nav-link" href="#features">
                  About Us
                </a>

                <a className="nav-link" href="#tours">
                  Tours
                </a>

                {/* <NavDropdown
                  title="DESTINATION"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">
                    {" "}
                    INDIA
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    ITALY {" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    FRANCE {" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    AUSTRALIA {" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    SPAIN {" "}
                  </NavDropdown.Item>
                </NavDropdown> */}

                <a className="nav-link" href="#recommendations">
                  Recommendations
                </a>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            <div className="primaryBtn d-none d-sm-inline-block">
              <Nav>
                <a className="nav-link" href="#bookings">
                  Book Now
                </a>
              </Nav>
            </div>

            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>

        </Navbar>
      </Container>
    </header>
  );
};

export default Header;