import React from "react";
import "../../../App.css";
import "./Schools.css";
import { Card } from "react-bootstrap";

function SchoolsPage() {
  return (
    <div className="schools">
      <div className="container">
        <div className="schools_text">
          <h1>Schools</h1>
          <hr />
          <div className="row">
            <p>
              Teachers are on the front lines of recognizing and addressing the
              mental health of their students. Untreated children unduly tax
              school systems that lack the resources to intervene. Schools
              currently provide more than 50% of the therapeutic care this
              segment receives through contracts with local providers. They are
              under resourced in the best of times. The heightened anxiety and
              distance learning teaching environments due to Covid-19 are
              creating heightened demand for digital solutions.
            </p>
            <div className="col-md-6 col-sm-12">
              <div className="parents_img">
                <img
                  src="images/struggling.jpg"
                  alt="Practice Naming Your Emotions"
                />
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="parents_txt">
                <Card style={{ border: "none", marginLeft: "1rem" }}>
                  <p>
                    YouROK’s engaging app K’Bro captures useful insights into
                    student well-being but more importantly provides low cost
                    interventions to help students improve their emotional
                    resiliency. Student care and support teams can easily view
                    student Am I OK? index scores, access synthesized results, and
                    get real time, targeted insights into individual students as
                    well as view school and district-wide trends. Data collected is
                    always confidential and secure, fully complying with HIPAA and
                    FERPA standards.
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
          <vl />
          <blockquote>
            <div className="quote">
              <p>
                "I have just felt so much better since downloading this game and
                I feel every middle schooler/ high schooler could use this
                game!"
              </p>
              <cite>15 year old user</cite>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default SchoolsPage;
