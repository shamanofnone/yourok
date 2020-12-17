import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../../../App.css";
import "./Payers.css";

function PayersPage() {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClicked);
  };

  return (
    <div className="payers">
      <div className="container">
        <div className="payers_text">
          <h1>Health Payers</h1>
          <hr />
          <div className="row">

            <div className="col-md-6 col-md-12">
              <div className="payers_img">
                <img
                  src="images/payer.jpg"
                  alt="Practice Naming Your Emotions"
                />
              </div>
            </div>

            <div className="col-md-6 col-md-12">
              <div className="payers_txt">
                <Card style={{ border: "none", marginLeft: "1rem" }}>
                  <p>
                    Health plans, employers, and managed behavioral health
                    organizations use YouROK to address critical gaps in care and
                    better execute on value-based arrangements. Payers utilize
                    YouROK’s dashboards to expand behavioral health access,
                    improve mental health outcomes and complement face-to-face
                    therapy options at a fraction of the cost.
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
            <div className="quotes">
              <p>
                "YouROK has designed a tool that will definitely help so many
                youth in the form of their emo-tional resiliency app K’Bro. It
                is clearly informed by youth and supported by professionals from
                multiple disciplines to deliver evidenced-based practices in a
                fun, engaging way."
              </p>
              <cite>
                Laura J. Champion, LMFT, MBA, Consultant and Former Executive
                Director, Uplift Family Services
              </cite>
            </div>
          </blockquote>

        </div>
      </div>
    </div>
  );
}

export default PayersPage;
