import React from "react";
import "../../../App.css";
import "./KbroFeatures.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "../../Dealwith.js";

function KbroFeatures() {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="features_text">
              <h1>
                How Kids Benefit from
                <span> K'bro</span>
              </h1>
              <hr />
              <p>
                YouROK cultivates your emotional well-being so you can be
                happier with who you are. Evidence-informed activities
                clinically proven to build emotional resiliency have been
                gamified so it’s fun to do things that are actually good for
                you. And when you play regularly you feel better: about you,
                your friends, your life!
              </p>
              <p>
                Part game/part anonymous sharing/part knowledgebase, K’Bro is a
                safe place for user to share their thoughts and emotions and get
                advice on how to deal with life’s challenges while getting
                validation on how well they’re doing through the “Am I OK?”
                index.
              </p>
              <p>
                Deep learning using semantic search and natural language
                processing of emotions expressed and issues raised via anonymous
                sharing will produce a daily “Am I OK?” index score to let kids
                and their professionals know how well they’re doing, alerting
                crisis resources when there is cause for concern.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div
              className="features_img"
              style={{ paddingTop: "10px", width: "550px" }}
            >
              <a href="am-i-ok>">
                <img
                  className="img-fluid"
                  style={{ width: "550px" }}
                  src="images/features_img.png"
                  alt="Practice Naming Your Emotions"
                />
              </a>
              <Card.Footer
                style={{
                  height: "70px",
                  fontSize: "25px",
                  justifyContent: "center",
                }}
              >
                Practice naming your emotions
              </Card.Footer>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="img_text" style={{ position: "flex" }}>
              <h1>Am I OK? Game</h1>
              <p>
                K’Bro captures four emotions out of 12 (six positive options and
                six negative options) for four categories in a child’s life:
                School, Family Life, Social Life and Everything Else. This helps
                K’Bro pinpoint which aspect of their life is where they’re
                having issues.
              </p>
              <p>
                Deep learning using semantic search and natural language
                processing of emotions expressed and issues raised via anonymous
                sharing will produce a daily "Am I OK?" index score to let kids
                and the adults who care for them know how well they're doing,
                alerting them when there is cause for concern.
              </p>
            </div>
          </div>
        </div>

        <div className="deal_with">
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Deal With It!</Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="images/deal-with-it.png" />
              <a href="../../dealwith">
                <Card.Footer>
                  Learn how to handle things on your own.
                </Card.Footer>
              </a>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Speak Up!</Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="images/speak-up.png" />
              <Card.Footer>
                Practice advocating for <br /> yourself.
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>What's Up?</Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="images/whats-up.png" />
              <Card.Footer>
                Practice gratitude on a daily <br /> basis.
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default KbroFeatures;
