import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaPrint,
  FaHouseDamage,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="text-light">
              Get connected with us on social networks:
            </span>
          </div>

          <div>
            <a href="" className="me-4 link-secondary">
              <FaFacebookF className="foot-icons" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaTwitter className="foot-icons" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaGoogle className="foot-icons" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaInstagram className="foot-icons" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaLinkedin className="foot-icons" />
            </a>
            <a href="" className="me-4 link-secondary">
              <FaGithub className="foot-icons" />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p className="text-p">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p className="text-p-a">
                  <a href="#" className="text-reset">
                    Angular
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#" className="text-reset">
                    React
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#" className="text-reset">
                    Node Js
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#" className="text-reset">
                    MongooDB
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p className="text-p-a">
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p className="text-p-a">
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-p-f">
                  {" "}
                  <FaHouseDamage className="foot-icons-f" /> New York, NY 10012,
                  US
                </p>
                <p className="text-p-f">
                  <FaEnvelope className="foot-icons-f" /> info@example.com
                </p>
                <p className="text-p-f">
                  <FaPhoneAlt className="foot-icons-f" /> + 01 234 567 88
                </p>
                <p className="text-p-f">
                  <FaPrint className="foot-icons-f" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 text-copy">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://Google.com/">
            Google.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
