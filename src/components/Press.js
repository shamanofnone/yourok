import React from "react";
import "./Press.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

function Press() {
  return (
    <div className="press">
      <div className="container">
        <div className="press_text">
          <h1>Press</h1>
          <hr />
          <Container>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    Healthcare innovation projects in context health
                  </Card.Header>
                  <a
                    href="https://www.slideshare.net/dayonebasel/dayone-conference-projects-169969877"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressOne.jpg" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    Tools to help burnout attention problems
                  </Card.Header>
                  <a
                    href="https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2019.7b6"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressSix.jpg" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    APA 'Shark Tank' Takes a Deep Dive Into Mental Health Care
                    Solutions
                  </Card.Header>
                  <a
                    href="https://www.medscape.com/viewarticle/896173"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressThree.jpg" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    YouROK’s app K’Bro Selected as Finalist for 2019 APA
                    Innovation Lab
                  </Card.Header>
                  <a
                    href="https://www.prdistribution.com/news/youroks-app-kbro-selected-as-finalist-for-2019-apa-innovation-lab/6738103"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressFour.png" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    Help Teens Cope with Stress from Stoneman Douglas Shooting
                  </Card.Header>
                  <a
                    href="https://www.pr.com/press-release/745637"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressFive.jpg" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    Sext, Text & What's Next Teens, Young Adults & Technology
                  </Card.Header>
                  <a
                    href="https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2019.7b6"
                    target="_blank"
                  >
                    <Card.Img src="/images/pressSix.jpg" />
                  </a>
                  <Card.Footer>READ MORE...</Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Press;
