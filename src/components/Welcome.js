import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <hr />
      <div className="container">
        <div className="welcome_text">
          <p>
            YouROK is a prevention focused solution developed to address the
            adolescent mental health crisis by building emotional resiliency
            using evidence-informed practices. YouROK offers a handheld gateway
            to powerful help with adolescents’ greatest challenges in the form
            of a mobile app called K’Bro. This engaging app reaches tweens and
            teens directly through a device to which they are very closely tied
            and provides an avenue for them to receive anonymous and unbiased
            support with difficult mental health concerns.
          </p>
          <p>
            As YouROK delivers self-help directly to youth it also keeps vital
            adults in the loop with regard to users’ experiences and functioning
            reducing demand for center-based care. Our dashboard provides hard
            to get data to identify when children need behavioral health
            intervention benefitting schools, payers, and providers.
          </p>
          <p>
            YouROK affords parents and professionals the opportunity to get to
            know adolescents in a way that no traditional, paper-and-pencil
            assessment ever will.
          </p>
          <h1>
            Hear <span>Our Story</span>
          </h1>
          <hr />
          <div className="embed-responsive embed-responsive-21by9">
            <iframe
              className="embed-responsive-item"
              src="videos/10seconds_music.mp4"
              style={{ paddingBottom: "2rem" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
