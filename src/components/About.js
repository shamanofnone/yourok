import React from "react";
import "../App.css";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about_text">
          <h1>About YouROK</h1>
          <hr />
          <p>
            YouROK was founded from a deep passion to challenge the status quo
            when it comes to adolescent mental health. No longer children but
            not yet adults, adolescents are the most underserved segment of the
            population. It’s no surprise that suicide is the 2nd leading cause
            of death for this age group. Mental health issues continue to rise
            sharply with a 37% increase in the prevalence of major depressive
            episodes among teens. Sadly, there has been no corresponding
            increase in treatment.
          </p>
          <p>
            There are many barriers to needed mental health services, such as
            peer stigma, fear of negative reactions from family members,
            underutilized school and community health services, lack of
            providers, cost and transportation constraints.
          </p>
          <p>
            Knowing that there must be a way to overcome these obstacles, we set
            out to help those we love… and the more than 50 million children who
            make up the statistic that 75% of mental health issues emerge by age
            24.
          </p>
          <p>
            To make our vision real, we leveraged our extensive product and
            design expertise, adolescent mental health insights, and surrounded
            ourselves with brilliant game designers and advisors. Together, we
            created YouROK to give adolescents a stigma free resource to help
            create the emotional resiliency to withstand the challenges of
            becoming an adult. And, we provide the professionals who care for
            them real-time insights for risk mitigation to ensure that every
            teen survives adolescence to become an emotionally healthy adult.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            style={{ display: "block" }}
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote>
                  <h4>Patrina Mack</h4>
                  <div className="profile-circle">
                    <img src="/images/patrinamack.png" />
                  </div>
                  <h5>
                    CEO/Founder <br />
                    Product/Market Fit Expert
                  </h5>
                  <p style={{ padding: "3rem", textAlign: "justify" }}>
                    Patrina Mack is CEO and founder of YouROK. She is a past
                    board member of the Mental Research Institute. In 2017 the
                    San Jose Business Journal honored her as a Woman of
                    Influence. Prior to founding YouROK Corp., Patrina founded
                    Vision & Execution in 1999. V&E served its clients as
                    interim sales, marketing and product development support for
                    global clients. Prior to that she led the SaaS product
                    development for NetGravity launching globally through IPO
                    until being acquired by Doubleclick. Before that she led new
                    product initiatives domestically and internationally for
                    PacTel Corporation through its spinoff and IPO to become
                    AirTouch.
                  </p>
                </blockquote>
              </div>

              <div className="carousel-item">
                <blockquote>
                  <h4>Louis Monier</h4>
                  <div className="profile-circle">
                    <img src="/images/louismonier.png" />
                  </div>
                  <h5>
                    Technical Advisor
                    <br />
                    Deep Learning Expert
                  </h5>
                  <p style={{ padding: "3rem", textAlign: "justify" }}>
                    Louis Monier was a founder of the Internet search engine
                    AltaVista. After he left AltaVista, he worked at eBay and
                    then at Google. He left Google in August 2007 to join Cuil,
                    a search engine startup where he was Vice President of
                    Products. He also was the co-founder and CTO of Qwiki with
                    Doug Imbruce. Qwiki won the TechCrunch Disrupt Award in 2010
                    and was recently sold to Yahoo. Louis was the Chief
                    Scientist of Proximic until July 2013, and then founded a
                    health technology company, Kyron. He is currently Chief
                    Scientist at Import.io and serves as Advisor, Investor and
                    Deep Learning Faculty member at Holberton School in San
                    Francisco. Monier received a Ph.D. in Mathematics and
                    Computer Science from the University of Paris XI, France in
                    1980 and worked at Carnegie Mellon University, Xerox PARC,
                    and DEC's Western Research Laboratory.
                  </p>
                </blockquote>
              </div>

              <div className="carousel-item">
                <blockquote>
                  <h4>Louis Monier</h4>
                  <div className="profile-circle">
                    <img src="/images/gregoryrenard.png" />
                  </div>
                  <h5>
                    Technical Advisor
                    <br />
                    Deep Learning Expert
                  </h5>
                  <p style={{ padding: "3rem", textAlign: "justify" }}>
                    Grégory Renard is CTO & Chief Visionary Officer at xBrain.
                    Previously was CIO at Wygwam sarl, Usilink, Regional
                    Director at Microsoft, and Professor at ISEN. Grégory began
                    his career in 1996 in academic research around new
                    technologies and created his first company in 1997 in the
                    field of web development. Greg is an expert in artificial
                    intelligence and big data working on unsupervised deep
                    learning, bot, personal assistant, connected things and
                    voice/semantic search for more than 15 years. He is
                    currently a Deep Learning Faculty member at Holberton School
                    in San Francisco. Through his professional activities in the
                    various companies he created, his publications (books,
                    blogs, etc.) and conferences, he is recognized as an expert
                    on computer technologies (especially from Microsoft with the
                    title of Most Valuable Professional since 2003 and as
                    Regional Director since 2006) then as a futurist and
                    architect of innovations. Grégory continues to advise many
                    large companies on their strategy and organization
                    innovation. He is also a professional technical futurist
                    speaker in different European universities and corporate
                    events in France, Europe, and US.
                  </p>
                </blockquote>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
