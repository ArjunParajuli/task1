import React from "react";
import GroupImg from '../assets/Group.png';
import "./home.css";

const Group = () => {
  return (
    <div className="px-3">
      <h1 className="grp-heading fst-italic fw-bold">
        Explore your <span className="grp-head-span">Hobby</span> or{" "}
        <span className="grp-head-span2">passion</span>
      </h1>

      <p className="fs-xs-6 fs-lg-5" style={{overflow: 'hidden'}}>
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities„.
      </p>

      <p>
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>

        <img src={GroupImg} alt="people" className="footer-img mb-2"></img>

    </div>
  );
};

export default Group;
