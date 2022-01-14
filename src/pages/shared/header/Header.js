import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const Header = () => {
  return (
    <div>
      <Navbar className="d-none d-md-block" bg="dark" variant="dark">
        <Container className="py-3">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <span className="text-warning pe-2">WORK TIME:</span>
              <span className="text-light">09:00 - 17:00</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-warning pe-2">Location:</span>
              <span className="text-light">
                {" "}
                Al Jaddaf - Dubai | Mirdif - Dubai
              </span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-warning pe-2">CONTACT:</span>
              <span className="text-light">+971508183559</span>
            </Nav.Link>
          </Nav>
          <Nav.Link href="#home">
            <span className="text-warning pe-2">FOLLOW US:</span>
            <span className="text-light">183559</span>
          </Nav.Link>
        </Container>
      </Navbar>

      {/* another-nav-for-float */}
      <div style={{ marginTop: "-1.2rem" }} className="container">
        <Navbar className="shadow" bg="white" expand={false}>
          <Container>
            <Navbar bg="white" expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    className=""
                    height="75"
                    src="https://strikers.ae/wp-content/uploads/2021/11/strikers-weblogo.jpg"
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle
                  className="d-block d-md-none"
                  aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {/* home-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                  <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/"
                    >
                        HOME
                    </Link>
                      </Nav.Link>

                     {/* about-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/about"
                    >
                        ABOUT US
                    </Link>
                      </Nav.Link>

                    {/* fees-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/fees"
                    >
                        FEES
                    </Link>
                      </Nav.Link>

                    {/* blogs-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/blogs"
                    >
                        BLOGS
                    </Link>
                      </Nav.Link>


                    {/* shop-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/shop"
                    >
                        SHOP
                    </Link>
                      </Nav.Link>

                    {/* contact-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/contact"
                    >
                        CONTACT
                    </Link>
                      </Nav.Link>

                    {/* registration-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/register"
                    >
                        REGISTRATION
                    </Link>
                      </Nav.Link>

                    {/* member-login-route */}
                    <Nav.Link className="text-dark fw-bold" href="">
                    <Link
                      className="text-decoration-none px-2 text-dark"
                      to="/login"
                    >
                        MEMBER LOGIN
                    </Link>
                      </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Navbar.Toggle
              className="d-none d-md-block"
              aria-controls="offcanvasNavbar"
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                    className=""
                    src="https://strikers.ae/wp-content/uploads/2021/11/strikers-weblogo.jpg"
                    alt=""
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="mt-5">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <h4 className="fw-bold py-4">Strikers Sport Academy</h4>
                 <p>We are a team built on friendship, hardwork, persistence, and dedication to our cause. We believe in the power of teamwork and its ability to win the game and grow a stronger society.</p>
                </Nav>

                <h4 className="fw-bold pt-4 pb-3">Join The Club</h4>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                
                <div className="container border ">
                  <div className="row p-0">
                  <input style={{backgroundColor:'lightgray'}} className="col-9 border-0" type="text" placeholder="Email"/>
                  <button className="col-3 border-0 h-100 bg-dark text-light m-0 py-3">Submit</button>
                  </div>
                </div>

                <div className="container mt-5">
                  <h5 className="fw-bold">Follow</h5>
                   <FaFacebookF/>
                   <AiFillInstagram/>
                </div>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <div style={{ marginTop: "-1.5rem" }} className="bg-dark py-4"></div>
    </div>
  );
};

export default Header;
