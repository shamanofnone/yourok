import React from "react";
import "../../../App.css";
import "./Providers.css";

function ProvidersPage() {
  return (
    <div className="providers">
      <div className="container">
        <div className="providers_text">
          <h1>Health Providers</h1>
          <hr />
          <div className="row">
            <p>
              The average visit with a pediatrician is 15 minutes leaving little
              time to delve into issues beyond physical health. The average wait
              time for a therapy appointment is 7 weeks. And help is often
              needed during non-business hours. When you don’t know the risk
              level the child is experiencing you have no idea if your patient
              will become a statistic. More than 4500 children aged 10-24 die by
              suicide with another 157,000 being treated in ERs across the
              country for self-inflicted injuries. Providers use YouROK to help
              risk stratify their patient population. YouROK’s proprietary
              algorithms identify who is at highest risk for providers to
              prioritize care.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>
                YouROK enables healthcare providers to increase mental health
                services without adding staff while more quickly identifying who
                is most at risk. Our solution captures hard to get data to
                identify when children need behavioral health intervention. The
                YouROK solution enables providers to track adolescent mental
                wellness and by extension gauge family and life functioning
                through its Enterprise Portal. For children being treated
                therapeutically it’s extremely difficult to measure progress and
                know when to stop therapy or when to change treatment. K’Bro
                provides unfiltered user insights to determine if therapeutic
                invention is needed and for therapists to monitor and adjust
                treatment.
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
            <div className="col-md-6 col-sm-12">
              <div className="parents_img">
                <img
                  src="images/counseling.jpeg"
                  alt="Practice Naming Your Emotions"
                />
              </div>
            </div>
          </div>
          <vl />
          <blockquote>
            <div className="quote">
              <p>
                "K'Bro is a mindful breath of fresh air in the gaming world. The
                application blends social networking, an interactive community,
                gaming and AI with measurable CBT techniques. The app is a
                cost-effective pathway to therapy for adolescents and young
                adults."
              </p>
              <cite>
                Dave Solsberg, MD PC, Neuroradiologist/Inventor/Entrepreneur
              </cite>
            </div>
          </blockquote>


        </div>
      </div>
    </div>
  );
}

export default ProvidersPage;
