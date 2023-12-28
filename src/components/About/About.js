import React from "react";
import person from "../../mahmudur.png";
import "./About.css";
const About = () => {
  return (
    <section class="about-area py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="about-left  col-md-12 col-lg-4 m-auto pb-5 pb-md-0">
            <img alt="" class="img-fluid" src={person} width="300" />
          </div>

          <div class="about-right col-12 ml-md-auto col-md-12 col-lg-6 pb-5 pb-md-0">
            <img alt="" class="fdb-icon" src="./imgs/icons/gift.svg" />
            <h1>About Me</h1>
            <p class="lead text-start">
              I am a front-end developer. I try to develop the front end of a
              web application using React.js.I am always ready to learn any
              technology or language. With around 2 years of professional
              experience, I have completed a couple of projects with React js,
              Redux Toolkit, RTK Query, Ant Design, Material UI, TailwindCSS,
              Bootstrap, HTML, CSS for small to medium-sized web application.
            </p>
            <p class="mt-4">
              <a
                class="btn btn-outline-danger"
                href="https://drive.google.com/file/d/1-Iq6Y-7O957MRrojguS2FAAFl6ta-C5F/view"
              >
                Download Resume
              </a>
              <a
                class="btn btn-outline-danger ms-3"
                href="https://www.linkedin.com/in/smmahmudur/"
              >
                Hire Me
              </a>
            </p>
            <h2 className="mt-5">My Skills</h2>
            <div class="container mt-2">
              <p className="text-start">React Js</p>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div class="container mt-2">
              <p className="text-start">JavaScript</p>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div class="container">
              <p className="text-start">HTML</p>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div class="container mt-2">
              <p className="text-start">CSS</p>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
            <div class="container mt-2">
              <p className="text-start">Bootstrap</p>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
          </div>
          <section class="fdb-block py-4">
            <div class="container">
              <div class="row text-left justify-content-center pt-5">
                <div class="col-12 col-md-12 col-lg-6 m-auto skill-area">
                  <h2>Skills in Details</h2>
                  <h4 className="text-start">Expertise:</h4>
                  <div className="text-start">
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      React.js
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Redux Toolkit
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      RTK Query
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Javascript(ES6)
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Bootstrap5
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Material UI
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Ant Design
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      HTML5
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      CSS3
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      SASS
                    </button>
                  </div>
                  <h4 className="text-start my-3">Comfortable:</h4>
                  <div className="text-start">
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Node JS
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      MongoDB
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Express JS
                    </button>
                  </div>
                  <h4 className="text-start my-3">Fimiliar:</h4>
                  <div className="text-start">
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      PHP(Basic)
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      WordPress
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      TailwindCSS
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      MySql
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Jquery
                    </button>
                  </div>
                  <h4 className="text-start my-3">Tools & Softwares:</h4>
                  <div className="text-start">
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Git
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Github
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Bitbucket
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Postman API
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Swagger API Documentation
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      VS Code
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Chrome Dev Tools
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Firebase
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Netlify
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Heroku
                    </button>
                  </div>
                  <h4 className="text-start my-3">Tools & Design:</h4>
                  <div className="text-start">
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Adobe Photoshop
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Figma
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-rounded m-2"
                    >
                      Adobe XD
                    </button>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6 m-auto pt-3 pt-md-0">
                  <div>
                    <h2 className="my-4">Experience</h2>
                    <h5 className="text-start">
                      Frontend Developer (March 2022 - Present)
                    </h5>
                    <h6 className="text-start mb-5">
                      Tortalabz Innovations Pvt. Ltd., Bangalore, India
                    </h6>
                    <h5 className="text-start">
                      Technical Support Engineer (Oct 2017 - Sept 2019)
                    </h5>
                    <h6 className="text-start mb-5">
                      Smart Technologies Ltd. Dhaka
                    </h6>
                  </div>
                  <div>
                    <h2 className="my-4">Education</h2>
                    <h4 className="text-start">Graduation:</h4>
                    <h5 className="text-start">
                      B.Sc. in Electrical & Electronics Engineering
                    </h5>
                    <h6 className="text-start mb-5">
                      Dhaka International University
                    </h6>

                    <h4 className="text-start">
                      Higher Secondary Certificate:
                    </h4>
                    <h5 className="text-start">Science</h5>
                    <h6 className="text-start mb-5">Sirajganj Govt. College</h6>

                    <h4 className="text-start">
                      Secondary School Certificate:
                    </h4>
                    <h5 className="text-start">Science</h5>
                    <h6 className="text-start">Sabuj Kanan High School</h6>
                  </div>
                </div>
                {/* <div class="col-12 col-md-12 col-lg-6 m-auto pt-3 pt-md-0">
                  <h2 className="my-4">Education</h2>
                  <h4 className="text-start">Graduation:</h4>
                  <h5 className="text-start">
                    B.Sc. in Electrical & Electronics Engineering
                  </h5>
                  <h6 className="text-start mb-5">
                    Dhaka International University
                  </h6>

                  <h4 className="text-start">Higher Secondary Certificate:</h4>
                  <h5 className="text-start">Science</h5>
                  <h6 className="text-start mb-5">Sirajganj Govt. College</h6>

                  <h4 className="text-start">Secondary School Certificate:</h4>
                  <h5 className="text-start">Science</h5>
                  <h6 className="text-start">Sabuj Kanan High School</h6>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
