import React from "react";

import { FaFacebookF, FaGoogle, FaFileCode, FaDesktop } from "react-icons/fa";

const Services = () => {
  return (
    <div className="service-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="service-heading">my service</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6  pt-5">
            <div className="card" id="cards">
              <div className="dot">
                <FaDesktop className="icons" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Web Design</h5>
                <p className="card-text">
                  i approach each project individullay and always focus on the
                  result
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 pt-5">
            <div className="card" id="cards">
              <div className="dot">
                <FaFileCode className="icons" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Your Website will be build with any new proven technologies
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 pt-5">
            <div className="card" id="cards">
              <div className="dot">
                <FaFacebookF className="icons" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Facebook Ads SMM</h5>
                <p className="card-text">
                  Your Potential clients well see Your services or product on
                  Facebook
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 pt-5">
            <div className="card" id="cards">
              <div className="dot">
                <FaGoogle className="icons" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Google Ads</h5>
                <p className="card-text">
                  your serveice or product will appear at the top of the Google
                  search
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="services-space"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
