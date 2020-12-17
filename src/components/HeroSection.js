import React from "react";
import "../App.css";
import "./HeroSection.css";
import Carousel from "react-bootstrap/Carousel";

function HeroSection() {
  return (
    <div className="sliders">
      <div className="carousel-inner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/teenhealth.jpg"
              alt="First slide"
            />
            <Carousel.Caption
              style={{ textShadow: "2px 2px rgb(136, 128, 128)" }}
            >
              <h3 style={{ fontSize: "55px" }}>PROVIDERS WANT </h3>
              <h2 style={{ fontSize: "6.6rem" }}>TO KNOW…</h2>
              <p style={{ fontSize: "32px" }}>
                How do I know which of my patients is most at risk?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src="images/schools.jpg"
              alt="Second slide"
            />

            <Carousel.Caption
              style={{ textShadow: "2px 2px rgb(136, 128, 128)" }}
            >
              <h3 style={{ fontSize: "55px" }}>SCHOOLS WANT </h3>
              <h2 style={{ fontSize: "6.6rem" }}>TO KNOW…</h2>
              <p style={{ fontSize: "32px" }}>
                How do we increase the emotional health of our campus?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "1000px" }}
              className="d-block w-100"
              src="images/payers.jpg"
              alt="Third slide"
            />

            <Carousel.Caption
              style={{ textShadow: "2px 2px rgb(136, 128, 128)" }}
            >
              <h3 style={{ fontSize: "55px" }}>PAYERS WANT </h3>
              <h2 style={{ fontSize: "6.6rem" }}>TO KNOW…</h2>
              <p style={{ fontSize: "32px" }}>
                How can I offer prevention solutions to reduce the cost of
                adolescent mental health?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src="images/father-daughter.png"
              alt="First slide"
            />
            <Carousel.Caption
              style={{ textShadow: "2px 2px rgb(136, 128, 128)" }}
            >
              <h3 style={{ fontSize: "55px" }}>PARENTS WANT </h3>
              <h2 style={{ fontSize: "6.6rem" }}>TO KNOW…</h2>
              <p style={{ fontSize: "32px" }}>
                Should I be worried about my child?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HeroSection;
