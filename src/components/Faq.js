import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="faqs">
      <div className="container">
        <div className="faqs_text">
          <h1>FAQS</h1>
          <hr />
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is YouROK?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    YouROK is the developer of K'Bro is a mobile app designed
                    with evidence-based activities that build emotional
                    resiliency gamified in a way that sustains regular
                    engagement and serves as a real-time, prevention tool to
                    adolescent mental health issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is Emotional Resiliency?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Emotional resiliency refers to the human ability to adapt in
                    response to adversity and stressful situations. Some people
                    demonstrate more resilience than others. This is largely due
                    to a combination of social and biological factors that shape
                    a person’s emotional state during formative years. In the
                    field of mental health, there is vast amounts of research
                    showing that emotional resiliency allows humans to cope with
                    life events, traumas, and stressors more effectively and to
                    lead a happier life. Such research shows that higher levels
                    of emotional competence (awareness, self-control, and
                    comfort with expression) in children and young teenagers
                    leads to a decreased risk of using hard drugs and behavioral
                    adjustment problems. More importantly, research shows that
                    teens of different backgrounds, family situations, and
                    biological predispositions can increase their emotional
                    resiliency.
                  </p>
                  <p>
                    Even the more "sensitive" individuals that are likely to let
                    stress and trauma set them back emotionally can be taught to
                    develop emotional resiliency despite their biological
                    predispositions. Therefore, building emotional resilience in
                    teens is essential to healthy development and creating
                    fulfilling lives for future generations. Currently,
                    emotional resilience is just emerging as a topic of
                    conversation with the advent of Social Emotional Literacy
                    programs in some schools. Mental health websites
                    occasionally provide information on how to increase
                    emotional resiliency, but the main access point to these
                    tips for adolescents would be through counseling. Many teens
                    do not attend counseling, because they are undiagnosed, and
                    do not communicate their need for help well. K’Bro not only
                    seeks to help with building emotional resilience, but also
                    communication between adolescents and their parents. K'Bro's
                    goal is to increase awareness of, and begin discussions
                    about emotional resiliency.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why does K'Bro work?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    The Am I OK? index takes a new approach to psychological
                    assessment. In lieu of a Likert scale, the index utilizes
                    conjoint analysis combined with advanced sentiment analysis
                    about multiple contexts in youths’ lives (e.g. school,
                    family, and social life) to gain a more comprehensive view
                    of their well-being. This shift away from Likert scales
                    delivers more accurate results because, instead of being
                    able to minimize the severity of their negative emotions,
                    using the Am I OK? index users simply acknowledge what
                    emotions (4 out of 12 options) a specific aspect of their
                    life evokes, without social comparison as the Likert scales
                    have been found to cause. Further, the index only asks about
                    present emotions, as opposed to most assessments, which ask
                    the person to identify their emotions over a longer period
                    (usually two weeks). This is particularly useful in the
                    treatment of adolescents, who often lack the ability to
                    reflect on their emotions over a long period of time,
                    particularly during periods of intense distress. The Am I
                    OK? index has also developed technology to interpret the
                    results of the assessment and deliver them to users using
                    language that they can easily understand. When the user has
                    identified their emotions about a variety of contexts, the
                    result is presented as either “not okay” “okay” or “better
                    than okay,” eliminating the jargon found in traditional
                    psychological assessments.
                  </p>
                  <p>
                    When teens need help acquiring strategies to cope with their
                    negative emotions, they practice peer communication by
                    asking for feedback in the Deal With It! forum. In addition,
                    many teens experience difficult emotions because of turmoil
                    with parents and other authority figures. When teens ask for
                    feedback concerning how to communicate with their parents or
                    teachers, for example, they are acquiring communication
                    strategies that are effective for both peers and superiors.
                    Ultimately, as users develop the ability to effectively
                    communicate their needs while respecting authority figures,
                    they will experience less social and familial distress. Even
                    though there are some minimal risks associated with
                    participation in the trial (such as the potential for
                    cyberbullying or sharing ineffective coping strategies),
                    these risks are outweighed by the participants’ potential to
                    develop important lifelong emotion regulation and
                    interpersonal effectiveness skills. For issues that cannot
                    be addressed within the app’s features users will be able to
                    text with a trained professional for additional support. If
                    their parent has a subscription the parent will be receiving
                    insights to help improve parent-child engagement.
                  </p>
                  <img
                    className="img-fluid"
                    src="/images/faq3.jpg"
                    alt="faq3"
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What if my child has issues that surface in K'Bro?
                  </button>
                </h2>
              </div>

              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    K’Bro takes advantage of artificial intelligence to respond
                    to crisis scenarios that users report in the forum-style
                    sections of the app: Deal With It!, Speak Up? and What’s Up?
                    Such words and phrases as “suicide” or “cutting” will
                    trigger an alert within the app to the child using K’Bro
                    with crisis strategies and other relevant solutions to these
                    more serious issues, at no cost to the user. For those
                    families where the parent has a paid subscription, the
                    parent will receive a weekly email with targeted
                    conversation starter tips based on the child’s issues; if
                    there is cause for concern the parent will receive an
                    immediate alert. In addition to helping teens get through
                    moments of high distress, K’Bro’s artificial intelligence
                    technology lets the app self-regulate such that community
                    managers do not need to individually screen content that is
                    posted within the app.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What type of activities will my child engage in using K'Bro?
                  </button>
                </h2>
              </div>

              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    K’Bro captures four emotions out of 12 (six positive options
                    and six negative options) for four categories in a child’s
                    life: School, Family Life, Social Life and Everything Else.
                    This helps K’Bro pinpoint if a child is not doing OK and
                    which aspect of their life is where they’re having issues.
                    For example, grades may be falling, but it’s really the
                    relationship with their coach that’s at issue. The game is
                    "addictingly" fun because once they’ve shared their
                    emotions, they play a fun runner game competing with their
                    friends to see who captures the most acorns. And their
                    positive use of the game is rewarded with additional acorns.
                  </p>
                  <p>
                    K’Bro provides a knowledge base dedicated to adolescent
                    topics to help kids figure out to handle things on their
                    own. If they don’t find the answer they’re looking for, they
                    can ask the My Tribe community anonymously how other kids
                    have handled similar issues. Kids get the chance to vote
                    “good idea” or “bad idea” on feedback others provide and to
                    block anyone whose answer seem inappropriate.
                  </p>
                  <p>
                    K’Bro created “Speak Up!” to help kids practice advocating
                    for themselves. In many ways, it’s the letter you write to
                    process your emotions but never send. It’s also the
                    opportunity to provide positive or negative feedback to
                    someone as part of self-advocacy even with you the parent!
                    Kids have the option of asking My Tribe to provide feedback
                    on their response by rating it “Helpful” or “Hurtful” to
                    ensure your child sends a productive message to accomplish
                    their self-advocacy goal.
                  </p>
                  <p>
                    What’s Up? is where kids get to practice gratitude on a
                    daily basis. Each day they’ll be asked three questions to
                    highlight what’s going right in their life. If they have a
                    “not so OK day” on the index, they’ll be reminded of all the
                    stuff that’s going right to help give them the emotional
                    boost they need to start to feel better.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How long does my child need to play K'Bro to experience
                    benefit?
                  </button>
                </h2>
              </div>

              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    If your child only used K’Bro 2 minutes a day it would begin
                    to have a positive impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSeven">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How frequently should my child play K'Bro?
                  </button>
                </h2>
              </div>

              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    While daily is ideal, most adolescents play K’Bro a few
                    times a week.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingEight">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    How do my kids access K'Bro?
                  </button>
                </h2>
              </div>

              <div
                id="collapseEight"
                className="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    You can access K’Bro from your android or iOS tablet or
                    smart phone. K’Bro can be found at google play store and
                    apple app store.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingNine">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    How do I access the parent subscription?
                  </button>
                </h2>
              </div>

              <div
                id="collapseNine"
                className="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    To create a parent account click here [link to parent
                    subscription page.] It is important to note that your child
                    must approve you having access to their Am I OK? weekly
                    index score in order to create this account. Not all kids
                    are comfortable sharing with their parents and to protect
                    their privacy while still providing access to a tool that
                    focuses on emotional wellness we created this two step
                    process. If your child does not approve your subscription
                    that would be an important topic of conversation as to why
                    they are uncomfortable with you knowing that they’re doing
                    OK. Most kids expressed interest in having their parents get
                    a subscription to keep their parents off their back with
                    daily questions as to how they are doing.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTen">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    How much does K'Bro cost?
                  </button>
                </h2>
              </div>

              <div
                id="collapseTen"
                className="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    K’Bro is always free to kids. Soon the kids will have the
                    option to make in-app purchases to enhance game play.
                    Parents pay $4.95 per month per child however there are
                    packages available for larger families.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingEleven">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    When does my K'Bro parent subscription start?
                  </button>
                </h2>
              </div>

              <div
                id="collapseEleven"
                className="collapse"
                aria-labelledby="headingEleven"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    You gain access to YouROK immediately upon submitting your
                    credit card after your child has approved your access to the
                    Am I OK? Index score.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwelve">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    What is YouROK's cancellation policy?
                  </button>
                </h2>
              </div>

              <div
                id="collapseTwelve"
                className="collapse"
                aria-labelledby="headingTwelve"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    You can cancel your account at any time in your account
                    settings. Your account will be active through the end of the
                    current month and will not renew.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThirteen">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThirteen"
                    aria-expanded="false"
                    aria-controls="collapseThirteen"
                  >
                    What is YouROK's refund policy?
                  </button>
                </h2>
              </div>

              <div
                id="collapseThirteen"
                className="collapse"
                aria-labelledby="headingThirteen"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    If you feel YouROK’s K’Bro Parent Subscription is not for
                    you, you can email info@kbro.io with your refund request. We
                    will refund your full payment at any time, no questions
                    asked.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFourteen">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFourteen"
                    aria-expanded="false"
                    aria-controls="collapseFourteen"
                  >
                    Does K'Bro breed cyber-bullying?
                  </button>
                </h2>
              </div>

              <div
                id="collapseFourteen"
                className="collapse"
                aria-labelledby="headingFourteen"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Although technology can breed cyberbullying and social
                    anxiety in users, it can also be utilized to combat
                    emotional problems in large numbers of people, because of
                    its accessibility. K’Bro provides that link between
                    technology and emotional well-being. The few, unlikely
                    psychological risks associated with K’Bro are the potential
                    for cyberbullying and sharing of unhelpful coping
                    mechanisms. Both are unlikely due to the up/down voting
                    system in the app and community managers’ ability to delete
                    offensive users. In a University of Wisconsin-Madison study
                    their research showed that it is the established norms
                    within any given community that determines the positive or
                    negative aspect of the comments and the community. They
                    noted we act consistently with the space and the situation;
                    a football game is different from a wedding for example.
                    K’Bro has taken exceptional care through community managers
                    to set a positive and reinforcing tone.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFifteen">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFifteen"
                    aria-expanded="false"
                    aria-controls="collapseFifteen"
                  >
                    Can my child use K'Bro if they are working with a therapist
                    or are taking medications such as anti-anxiety or
                    antidepressant medications?
                  </button>
                </h2>
              </div>

              <div
                id="collapseFifteen"
                className="collapse"
                aria-labelledby="headingFifteen"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Yes. Users will begin to improve their emotional resilience
                    by labelling their emotions. Many adolescents can identify
                    when they feel “overwhelmed” or “stressed,” but need help
                    identifying their underlying emotions. Since the Am I OK?
                    index offers users a choice of four different, simple
                    emotions out of twelve that users can select to describe
                    their emotional state, teens are able to associate their
                    complex feelings with concrete emotions. When users continue
                    to use the Am I OK? index for a prolonged period, they will
                    begin to observe patterns and take note of triggers, which
                    will help them develop appropriate coping strategies and, in
                    turn, experience fewer negative emotions overall. This will
                    facilitate better communications with their therapist. As
                    children build their emotional resilience using K’Bro they
                    may, over time, reduce the need for medication.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSixteen">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSixteen"
                    aria-expanded="false"
                    aria-controls="collapseSixteen"
                  >
                    Does YouROK take steps to secure my data?
                  </button>
                </h2>
              </div>

              <div
                id="collapseSixteen"
                className="collapse"
                aria-labelledby="headingSixteen"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    YouROK has a mobile user experience that connects to a set
                    of APIs exposed via SSL-encrypted and username/password
                    secured RESTFul web-services. The username/password is only
                    transmitted over SSL when the user first opens the mobile
                    application, and all following transactions use a secured
                    token that is created for the user's session. Data is not
                    stored on the mobile device, but always fetched from the
                    APIs. The APIs are an authorized and common extension of
                    Drupal. Drupal connects to a MySQL database to store the
                    user data. The APIs, Drupal, and MySQL are hosted on the
                    Azure platform. Access to the Azure platform is protected by
                    usernames and passwords. Access to the virtual machines in
                    Azure has an additional layer of public/private key pairs to
                    establish operating system level connections. Access to
                    privileged functions is logged, but there is additional
                    enhancement necessary to provide consistent and complete
                    separation of duty between community managers and dev-ops
                    team members.
                  </p>
                  <p>
                    YouROK complies with protected information regulatory
                    measures by only allowing people to access the minimum
                    amount of information to complete their job. HIPAA, for
                    instance, is addressed by only allowing community managers
                    to access the necessary data to regulate and monitor user
                    interactions. Developers work in isolated environments that
                    do not contain protected information. In addition, K'Bro
                    continues to improve our overall security posture as we
                    identify additional regulatory or compliance measures that
                    are necessary or beneficial to K'Bro.
                  </p>
                  <p>
                    YouROK is continually refining the appropriate controls to
                    manage the IT effort overall, including common activities
                    such as change management, configuration management,
                    security and governance. For more information, please refer
                    to our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
