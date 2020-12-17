import React from "react";
import "../../../App.css";
import "./KbroUsers.css";
import { Card } from "react-bootstrap";

function KbroUsers() {
  return (
    <div className="users">
      <div className="container">
        <div className="users_text">
          <h1>
            <span>K'Bro</span> Users
          </h1>
          <hr />
          <p>
            YouROK cultivates your emotional wellbeing so you can be happier
            with whom you are. Evidence-informed activities clinically proven to
            build emotional resiliency have been gamified so it’s fun to do
            things that are actually good for you. And when you play regularly
            you feel better: about you, your friends, your life!
          </p>

          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="users_img" style={{ marginBottom: "20px", marginTop: "10px" }}>
                <a href="deal-with-it>">
                  <img
                    className="img-responsive"
                    src="images/teensphones.jpeg"
                    alt="Practice Naming Your Emotions"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="img_text" style={{ marginLeft: "100px", marginBottom: "20px" }}>
                <Card style={{ border: "none", marginLeft: "1rem" }}>
                  <p>
                    Part game/part anonymous sharing/part knowledgebase, K’Bro is
                    a safe place for user to share their thoughts and emotions and
                    get advice on how to deal with life’s challenges while getting
                    validation on how well they’re doing through the “Am I OK?”
                    index.
                </p>
                  <p>
                    Deep learning using semantic search and natural language
                    processing of emotions expressed and issues raised via
                    anonymous sharing will produce a daily “Am I OK?” index score
                    to let kids and their professionals know how well they’re
                    doing, alerting crisis resources when there is cause for
                    concern.
                </p>
                  <div className="featured-announcement">
                    <p>
                      Ready to learn more about YouROK? Request a demo
            <a
                        target="_blank"
                        href="https://share.hsforms.com/19DxX8g2DRYudA8WDBtPmbw1nr57"
                      >
                        <button
                          style={{ marginLeft: "10px" }}
                          type="button"
                          className="btn-primary"
                        >
                          Demo
              </button>
                      </a>
                    </p>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default KbroUsers;
