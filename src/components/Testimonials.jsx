import React from "react";
import Add from "../assets/Add.png";
import { Card, Row, Col, Container } from 'react-bootstrap';
import testimonial from '../assets/quote.png'
import testProfile from '../assets/test-profile.png'

const Testimonials = () => {
  return (
    <div>

      {/* "add your own" section */}
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-start">
            <h5 className="card-title">
              <img src={Add} alt="add"></img> People
            </h5>
            <p className="card-text">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <a href="#" className="btn btn-primary btn-feature1">
              Add New
            </a>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <Container className="">
      <Card className="my-5 p-4 shadow testimonial-div">

      <Card.Body>
      <Card.Title className="fw-bold"><img src={testimonial} alt="testimonials"></img>    Testimonials</Card.Title>
        <blockquote className="blockquote mb-4">
          <p>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
        </blockquote>
        <Row className="d-flex align-items-center justify-content-xl-start">
          <Col xs={2} md={1} >
            <img
              src={testProfile}
              alt="Shubha Nagarajan"
              className="rounded-circle"
              width="50"
              height="50"
            />
          </Col>
          <Col xs={7} md={5}>
            <h5 className="mb-0 testimonial-h5">Shubha Nagarajan</h5>
            <small className=" testimonial-small">Classical Dancer</small>
          </Col>
        </Row>

        <div className="mt-4 d-flex">
          <audio controls className="w-100 ">
            <source src="audio-file.mp3" type="audio/mpeg" className="testimonial-audio" />
            Your browser does not support the audio element.
          </audio>
          <img src={testProfile} width='60' height='60' ></img>
        </div>

      </Card.Body>
    </Card>
    </Container>

    </div>
  );
};

export default Testimonials;
