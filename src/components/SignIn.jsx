import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./home.css";
import { MdLock } from "react-icons/md";


const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-100 px-5 mt-3">
      <div className="d-flex gap-3 fw-bold fs-5 cursor-pointer">
        <p
          onClick={() => setIsSignIn((prev) => !prev)}
          className={`${isSignIn && "active"} cursor-pointer sign-in-p home-btn`}
        >
          Sign In
        </p>
        <p
          onClick={() => setIsSignIn((prev) => !prev)}
          className={`${!isSignIn && "active"} cursor-pointer sign-in-p home-btn`}
        >
          Join In
        </p>
      </div>

      <div className="d-flex flex-column gap-3">
        <Button className="signin-g-f-btn">
          <FcGoogle /> Continue with Google
        </Button>
        <Button className="signin-g-f-btn">
          <FaFacebook className="text-primary" /> Continue with Facebook
        </Button>
      </div>

      <div className="my-4 d-flex justify-content-center align-items-center gap-2">
        <span
          style={{
            height: "3px",
            backgroundColor: "#CED4DA",
            width: "28%",
            display: "inline-block",
          }}
        ></span>
           <span className="fw-xl-bold text-center">Or Connect with </span>  
        <span
          style={{
            height: "3px",
            backgroundColor: "#CED4DA",
            width: "28%",
            display: "inline-block",
          }}
        ></span>
      </div>

      <Container className="my-2">
      <Row>
        <Col>
          <Form className="d-flex flex-column gap-3">
            <Form.Group controlId="exampleEmail">
              <Form.Control type="email" placeholder="Email" className="border-0" />
            </Form.Group>

            <Form.Group controlId="examplePassword">
              <Form.Control type="password" placeholder="Password" className="border-0" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>

    {
      isSignIn ? 
      <Form className="d-flex justify-content-between">
        <Form.Check type="checkbox" label="Remember me" />
        <Form.Label><MdLock /> <a href="#" style={{textDecoration: 'none'}}>Forgot Password?</a></Form.Label>
      </Form>
      :
      <p className="tnc">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
    }

<button className={`my-3 w-100 ${isSignIn ? 'signin-btn' : 'joinin-btn'}`}>{isSignIn ? 'Continue' : 'Agree and continue'}</button>

    </div>
  );
};

export default SignIn;
