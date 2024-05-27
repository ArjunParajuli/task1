import React from "react";
import GroupFooter from '../assets/GroupFooter.png'
import FooterSocials from "./FooterSocials";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="container mt-5">
          <div className=" text-start">
            <h5 className=" grp-heading fst-italic fw-bold">
              Your <span className="grp-head-span">Hobby</span> Your {" "}
              <span className="grp-head-span2">Community...</span>
            </h5>
            <a href="#" className="btn btn-primary btn-feature1 mt-2 mb-4">
              Get Started
            </a>
            <img src={GroupFooter} alt="GroupFooter" className="footer-img" ></img>
            
          </div>
        </div>

        <FooterSocials />
      
    </div>
  );
};

export default Footer;
