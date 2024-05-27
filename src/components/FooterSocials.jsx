import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

const FooterSocials = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Hobbycue</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>How Do I</h5>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>

            <h5 className="mt-4">Invite Friends</h5>
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                  className=""
                />
                <Button className="search-btn">
                  <CiSearch className="fw-bold " />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center footer-end-text">
            <p>&copy; Purple Cues Private Limited</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSocials;
