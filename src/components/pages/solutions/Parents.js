import React from "react";
import "../../../App.css";
import "./Parents.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function ParentsPage() {
  return (
    <div className="parents">
      <div className="container">
        <div className="parents_text">
          <h1>Parents</h1>
          <hr />
          <div className="row">
            <p>
              It’s natural for kids to pull away from their parents as they
              embark on their journey towards independence. Times have changed,
              though, from when we went through this with our parents. Social
              media has had a huge impact, but so have other socioeconomic
              factors. So, what do we do when our kids tell us to leave them
              alone as they venture out into the world experiencing challenges
              both successful and disappointing?
            </p>
            <div className="col-md-7 col-sm-12">
              <div className="parents_txt">
                <p>
                  K’Bro bridges the gap for you. Your kids have access to
                  evidence-based practices gamified to build their emotional
                  resiliency.K’Bro offers helpful tips for you to help them
                  navigate complex issues they might be experiencing and
                  enhances your own relationship with them. You get weekly
                  alerts about their well-being with conversational starts.
                </p>
                <p>
                  Being there for our kids as they gain their independence is
                  key to keeping them emotionally healthy so they can grow into
                  productive adults. Be there when they need you with K’Bro.
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
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="parents_img">
                <img
                  src="images/about_bg.png"
                  alt="Practice Naming Your Emotions"
                />
              </div>
            </div>

            <p>
              K’Bro helps your kids learn effective emotional self-care while
              keeping you in the loop. The K’Bro Parent Subscription sends you a
              weekly update to let you know how your child is doing and where
              they might need some extra support: school, family life, social
              life or other stuff. K’Bro always protects the privacy of what
              kids share in K’Bro but we share just enough with you to help you
              engage constructively with your kids. And if ever there is a cause
              for concern you’ll get an immediate email alert.
            </p>
          </div>

          <blockquote>
            <vl style={{ height: "95px" }} />
            <div className="quote">
              <p>
                "Kids need avenues to freely express themselves without being
                judged or supervised by a parent. K’Bro is a great vehicle for
                kids to be honest with themselves and gain better
                self-awareness"
              </p>
              <cite>Mother of 15 year old K'Bro user.</cite>
            </div>
          </blockquote>

          <blockquote>
            <vl />
            <div className="quote">
              <p>
                "I feel less connected every day as a mom and it's harder for my
                kids than when I was growing up. "
              </p>
              <cite>Mother of 16 year old K'Bro user.</cite>
            </div>
          </blockquote>

          <blockquote>
            <vl />
            <div className="quote">
              <p>
                "K'Bro and the parent subscription is a great way to keep us
                connected!"
              </p>
              <cite>Mother of 18 year old K'Bro user.</cite>
            </div>
          </blockquote>

          <div className="pricing">
            <div className="container-fluid">
              <div className="text-center">
                <h2>Parent Pricing</h2>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="panel panel-success text-center">
                    <div className="panel-heading">
                      <h4>
                        Monthly Subscription <hr />
                      </h4>
                    </div>
                    <div className="panel-body">
                      <p>
                        <strong>For 1 Child</strong>
                      </p>
                    </div>
                    <div className="panel-footer">
                      <h3>$4.95</h3>
                      <h5>per month</h5>
                      <button type="button" className="btn-warning">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h4>
                        Six Month Subscription <hr />
                      </h4>
                    </div>
                    <div className="panel-body">
                      <p>
                        <strong>For 1 Child</strong>
                      </p>
                    </div>
                    <div className="panel-footer">
                      <h3>$24.95</h3>
                      <h5>per 6 months</h5>
                      <button type="button" className="btn-warning">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h4>
                        Annual Subscription <hr />
                      </h4>
                    </div>
                    <div className="panel-body">
                      <p>
                        <strong>For 1 Child</strong>
                      </p>
                    </div>
                    <div className="panel-footer">
                      <h3>$48.95</h3>
                      <h5>per year</h5>
                      <button type="button" className="btn-warning">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading">
                      <h4>
                        Family <br />
                        Subscription <br />
                        <hr />
                      </h4>
                    </div>
                    <div className="panel-body">
                      <p>
                        <strong> Up to 4 Children</strong>
                      </p>
                    </div>
                    <div className="panel-footer">
                      <h3>$144.95</h3>
                      <h5>per year</h5>
                      <button type="button" className="btn-warning">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentsPage;
