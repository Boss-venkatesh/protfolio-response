import React from "react";
import wall from "../man.jpg";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={wall} className="rounded-circle" alt="wl----" />
              </div>
              <div className="col-lg-6">
                <div>
                  <h1 className="about-heading">About Me</h1>
                  <p className="about-para">
                    What is an "about me" statement? An "about me" statement is
                    a brief paragraph or a few paragraphs that introduce you,
                    your product or your company to others. Well-crafted "about
                    me" statements can help readers, such as customers or
                    employers, form a connection with you. What is an "about me"
                    statement? An "about me" statement is a brief paragraph or a
                    few paragraphs that introduce you, your product or your
                    company to others. Well-crafted "about me" statements can
                    help readers, such as customers or employers, form a
                    connection with you.What is an "about me" statement? An
                    "about me" a brief paragraph or a few paragraphs that
                    introduce you, your product or your company to others.
                    Well-crafted "about me" statements can help readers, such as
                    customers or employers, form a connection with you. What is
                    an "about me" statement? An "about me" statement is a brief
                    paragraph or a few paragraphs that introduce you,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
