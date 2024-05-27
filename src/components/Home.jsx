import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Group from "./Group"; 
import SignIn from "./SignIn"; 
import "./home.css"; 
import Feature1 from "./Feature1";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>

    <div className='home-div d-xs-flex d-xs-flex-column d-xl-flex-row pt-5 px-xl-3'>
      <Row>
        <Col xs={12} xl={8} className="d-flex align-items-center justify-content-center ">
          <Group />
        </Col>
        <Col xs={12} xl={4} className="d-flex align-items-center justify-content-center ">
          <SignIn />
        </Col>
      </Row>
    </div>

    <Feature1 />

    <Testimonials />

    <Footer />

    </div>
  );
}

export default Home;
