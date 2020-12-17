import React from "react";
import "./Dealwith.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dealwith() {
  return (
    <div className="dealwith">
      <div className="container">
        <div className="dealwith_text">
          <h1>Deal With It!</h1>
          <hr />
          <Row>
            <Col md={6}>
              <img src="/images/dealwithhw.png" />
            </Col>
            <Col md={6}>
              <p>
                K’Bro provides a knowledge base dedicated to adolescent topics
                to help kids figure out to handle things on their own. If they
                don’t find the answer they’re looking for, they can ask the My
                Tribe community anonymously how other kids have handled similar
                issues. Kids get the chance to vote “good idea” or “bad idea” on
                feedback others provide and to block anyone whose answer seem
                inappropriate.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Dealwith;
