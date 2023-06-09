import React from "react";
import { FaRegHeart, FaFeatherAlt, FaPencilAlt, FaIcons } from "react-icons/fa";
const Features = () => {
  return (
    <div className="features-box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="feature-head">Features</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="feature-para">
              ---------------
              <FaRegHeart />
              ---------------
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="round-cir">
                <p className="feature-icon">
                  <FaFeatherAlt />
                </p>
              </div>
              <h3>Branding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                fugit inventore corrupti rerum ipsam earum quas quae impedit
                minus, id nisi ratione accusantium quidem necessitatibus. Labore
                suscipit nulla autem voluptatem?
              </p>
              <button className="read-btn">Read More..</button>
            </div>

            <div className="col-lg-4 pt-4">
              <div className="round-cir">
                <p className="feature-icon">
                  <FaPencilAlt />
                </p>
              </div>
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                fugit inventore corrupti rerum ipsam earum quas quae impedit
                minus, id nisi ratione accusantium quidem necessitatibus. Labore
                suscipit nulla autem voluptatem?
              </p>
              <button className="read-btn">Read More..</button>
            </div>

            <div className="col-lg-4 pt-4">
              <div className="round-cir">
                <p className="feature-icon">
                  <FaIcons />
                </p>
              </div>
              <h3>Consulting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                fugit inventore corrupti rerum ipsam earum quas quae impedit
                minus, id nisi ratione accusantium quidem necessitatibus. Labore
                suscipit nulla autem voluptatem?
              </p>
              <button className="read-btn">Read More..</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
