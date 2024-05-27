import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../assets/logo.png";
import { InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCompass, FaBookmark, FaBell, FaShoppingCart } from "react-icons/fa";
import { GiAlliedStar } from "react-icons/gi";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

import "./Navigation.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="mx-auto px-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 d-flex justify-content-evenly align-items-center"
            navbarScroll
          >
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

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="fw-bold">
                <FaCompass className="purple" /> Explore
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>People - Community</Dropdown.Item>
                <Dropdown.Item>Places - Venues</Dropdown.Item>
                <Dropdown.Item>Programs - Events</Dropdown.Item>
                <Dropdown.Item>Products - Store</Dropdown.Item>
                <Dropdown.Item>Blogs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="fw-bold"
              >
                <GiAlliedStar className="purple" /> Hobbies
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>People - Community</Dropdown.Item>
                <Dropdown.Item>Places - Venues</Dropdown.Item>
                <Dropdown.Item>Programs - Events</Dropdown.Item>
                <Dropdown.Item>Products - Store</Dropdown.Item>
                <Dropdown.Item>Blogs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          <Nav className="">
            <Nav.Item>
              <NavLink href="#"><FaBookmark className="purple" /></NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink href="#"><FaBell className="purple" /></NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink href="#"><FaShoppingCart className="purple" /></NavLink>
            </Nav.Item>
            </Nav>

            <Button className="btn-sign-in">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
