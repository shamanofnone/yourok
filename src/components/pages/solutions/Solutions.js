import React from "react";
import "../../../App.css";
import "./Solutions.css";
import Image from "react-bootstrap/Image";
function SolutionsPage() {
  return (
    <div className="solutions">
      <div className="container">
        <div className="solutions_text">
          <h1>Solutions</h1>
          <hr />

          <p>
            Adolescent mental health is a growing <span>epidemic.</span>
          </p>
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="solutions_txt">
                <p>
                  13% of children ages 8 to 15 have had a diagnosable mental disorder
                  within the previous year, 20% of youth ages 13-18 have a severe
                  mental disorder, and 46% will experience some form of mental health
                  disorder in their lifetime.
                </p>
                <p>
                  This means that 1 in 5 school age children are in need of mental
                  health support and intervention in a system lacking the capacity to
                  deliver these services. Only 7.4 percent of adolescents report
                  visiting with a mental health professional over the course of a
                  year.
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
              <div className="solutions_img">
                <img src="images/bullying.jpg" alt="Kids" />

              </div>

            </div>

            <p>
              Untreated children unduly tax school systems that lack the resources
              to intervene. The growing impact of pediatric mental health
              disorders is driving up costs for children’s hospitals and health
              care delivery systems.
                </p>
            <p>
              Emergency rooms are taxed with a growth in hospitalizations due to
              suicide. Suicide is the third leading cause of death among
              adolescents in the United States; these rates more than doubled from
              2008 to 2015. For those aged 15 to 24 suicide is the
            <span> second leading cause of death.</span>
            </p>



          </div>
          <p style={{ fontWeight: "bold" }}>
            YouROK addresses these challenges through its emotional resiliency
            app K’Bro which provides the insights those who care for adolescents
            need to ensure their emotional well-being.
          </p>
          <p>
            K'Bro helps me get through tough times, and keeps parents off my
            back with their daily check-ins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SolutionsPage;
