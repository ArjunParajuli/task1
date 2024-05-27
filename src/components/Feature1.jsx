import React from "react";
import program from '../assets/program.png'
import product from '../assets/product.png'
import people from '../assets/people.png'
import location from '../assets/location.png' 
import './home.css'

const Feature1 = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title"><img src={people} alt='program' className="small" ></img>    People</h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <a href="#" className="btn btn-primary btn-feature1">
                Connect
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title"><img src={location} alt='program' className="small" ></img> Place</h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <a href="#" className="btn btn-primary btn-feature1">
                Meet up
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title"><img src={product} alt='program' className="small" />   Product</h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <a href="#" className="btn btn-primary btn-feature1">
                Get it
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title"><img src={program} alt='program' className="small"></img>   Program</h5>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <a href="#" className="btn btn-primary btn-feature1">
                Attend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
