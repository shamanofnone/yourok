import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_text">
          <h1>Contact Us</h1>
          <hr />
          <div className="row">
            <div className="left-bottom ">
              <iframe
                className="iframe"
                style={{ width: "50vw", height: "150vh" }}
                src="https://share.hsforms.com/19DxX8g2DRYudA8WDBtPmbw1nr57"
              ></iframe>
            </div>
            <div className="right-bottom">
              <img src="/images/contactus.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
