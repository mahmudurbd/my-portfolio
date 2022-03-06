import React from 'react';
import './Portfolio.css';
import portfoli1 from '../../../port-1.jpg';
import portfoli11 from '../../../Timekeeper-1.jpg';
import portfoli111 from '../../../timekeeper-3.jpg';
import portfoli2 from '../../../port-2.jpg';
import portfoli22 from '../../../travelo-1.jpg';
import portfoli222 from '../../../travelo-3.jpg';
import portfoli3 from '../../../port-3.jpg';
import portfoli33 from '../../../lifecare-1.jpg';
import portfoli333 from '../../../lifecare-3.jpg';
import portfolio4 from '../../../edusite.jpg';
import portfolio44 from '../../../edusite2.jpg';

const Portfolio = () => {
    return (
        <div id="portfolio" className="container portfolio-area py-5">
            <h2 className="text-white pt-5">Portfolio</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3">
          
  <div class="col py-5">
    <div class="card">
      <img
        src={portfoli1}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder">TimeKeeper</h5>
        <p class="card-text">
        Branded Watches Niche website, which serves various branded watches like Rolex, Omega,
Citizen, etc..
        </p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details More
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">TimeKeeper Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center pb-5">
              <div class="col-12 text-center">
                <h1>TimeKeeper | Branded Watches Website</h1>
              </div>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfoli1}/>
                <hr />
              </div>
              <div class="col-6">
              <img alt="" class="img-fluid" src={portfoli111}/>
              <hr />
              </div>
              <div class="col-6 mt-4">
              <hr />
              <img alt="" class="img-fluid" src={portfoli11}/>
              </div>
            </div>
            <div className="">
              <a href="https://time-keeper-19d8e.web.app" className="btn btn-outline-danger">Live Site Link</a>
              <a href="https://github.com/mahmudurbd/timekeeper-niche-website-client-side" className="btn btn-outline-danger mx-2">Github Link</a>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-12">
                <h2><strong>About Project</strong></h2>
                <ul>
                  <li className="list-unstyled text-start fw-normal">1.It is a Branded Watches Niche website, which serves various branded watches like Rolex, Omega,
        Citizen, etc.</li> <br />
                  <li className="list-unstyled text-start fw-normal">2.Users and Admin can sign up and log in to this website using google and email & password. </li> <br />
                  <li className="list-unstyled text-start">3.Anyone
        cannot go to some pages without login, which is developed by React Router.</li> <br />
                  <li className="list-unstyled text-start">4.There is a dashboard for the User and Admin. Users can place orders, see their order list. </li> <br />
                  <li className="list-unstyled text-start">5.Admin
        can see all orders of the users and can add a new service and make a new admin by providing the
        new admin’s email.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col py-5">
    <div class="card">
      <img
        src={portfoli2}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder">Travelo</h5>
        <p class="card-text">
        Tour package management website where people can search for places to
visit.
        </p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Details More
        </button>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Travelo Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center pb-5">
              <div class="col-12 text-center">
                <h1>Travelo | Travel & Tour Packages Website</h1>
              </div>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfoli2}/>
                <hr />
              </div>
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfoli222}/>
                <hr />
              </div>
              <div class="col-6">
                <hr />
              <img alt="" class="img-fluid" src={portfoli22}/>
              </div>
            </div>
            <div className="">
              <a href="https://travelo-tour-package.web.app/" className="btn btn-outline-danger">Live Site Link</a>
              <a href="https://github.com/mahmudurbd/travel-website-client-side" className="btn btn-outline-danger mx-2">Github Link</a>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-12">
                <h2><strong>About Project</strong></h2>
                <ul>
                  <li className="list-unstyled text-start fw-normal">1.This project is based on a tour package management website where people can search for places to
visit and can see the description of the spectacular places</li> <br />
                  <li className="list-unstyled text-start">2.Users can log in via Google with firebase authentication</li> <br />
                  <li className="list-unstyled text-start">3.As login users, users can check their booking places</li> <br />
                  <li className="list-unstyled text-start">4.If users want to visit custom places they can add a new packages</li> <br />
                  <li className="list-unstyled text-start">5.After logging, Users can read the description of the places and click 'Booking' to make a booking
for that place. Then Users have to fill up a Checkout form for placing the User's booking order.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col py-5">
    <div class="card">
      <img
        src={portfoli3}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder">LifeCare</h5>
        <p class="card-text">
        A medical therapy-related website where people can take their treatment and can know details
about services.
        </p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal3">
          Details More
        </button>
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">LifeCare Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center pb-5">
              <div class="col-12 text-center">
                <h1>LifeCare | Health Service-Related Website</h1>
              </div>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfoli3}/>
                <hr />
              </div>
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfoli333}/>
                <hr />
              </div>
              <div class="col-6">
              <img alt="" class="img-fluid" src={portfoli33}/>
              <hr />
              </div>
            </div>
            <div className="">
              <a href="https://lifecare-health-service-13759.web.app/" className="btn btn-outline-danger">Live Site Link</a>
              <a href="https://github.com/mahmudurbd/healthcare-website" className="btn btn-outline-danger mx-2">Github Link</a>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-12">
                <h2><strong>About Project</strong></h2>
                <ul>
                  <li className="list-unstyled text-start fw-normal">1.It is a medical therapy-related website where people can take their treatment and can know details
about services from this website.</li> <br />
                  <li className="list-unstyled text-start">2.Created login page for tracking uesers information</li> <br />
                  <li className="list-unstyled text-start">3.Users can log in via Google with firebase authentication.</li> <br />
                  <li className="list-unstyled text-start">4.People can get brief information without logging</li> <br />
                  <li className="list-unstyled text-start">5.Logging with google users can know more about services and make appointments or Telemedicine
services..</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col py-5">
    <div class="card">
      <img
        src={portfolio4}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder">EduSite</h5>
        <p class="card-text">
        Educational website where people can choose their desired courses and can get updated upcoming courses.
        </p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal4">
          Details More
        </button>
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">EduSite Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center pb-5">
              <div class="col-12 text-center">
                <h1>EduSite | Educational Website</h1>
              </div>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfolio4}/>
                <hr />
              </div>
              <div class="col-6">
                <img alt="" class="img-fluid" src={portfolio44}/>
                <hr />
              </div>
            </div>
            <div className="">
              <a href="https://edusite-bd.netlify.app/" className="btn btn-outline-danger">Live Site Link</a>
              <a href="https://github.com/mahmudurbd/educational-website" className="btn btn-outline-danger mx-2">Github Link</a>
            </div>
            <div class="row text-left align-items-center pt-5 pb-md-5">
              <div class="col-12">
                <h2><strong>About Project</strong></h2>
                <ul>
                  <li className="list-unstyled text-start fw-normal">1.Educational website where people can choose their desired courses and can get updated upcoming courses.</li> <br />
                  <li className="list-unstyled text-start">2.Created about page for brifing their services</li> <br />
                  <li className="list-unstyled text-start">3.For users, created a contact form</li> <br />
                </ul>
              </div>
            </div>
          </div>
        </section>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
};

export default Portfolio;