import React from 'react';
import './MyServices.css';
import service1 from '../../../psd-html.png';
import service2 from '../../../web-design.png';
import service3 from '../../../web-development.png';

const MyServices = () => {
    return (
        <div id="services" className="container services-area py-5">
            <h2 className="text-white pt-5">My Services</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3">
          
  <div id="psd" class="col py-5">
    <div class="card">
      <img
        src={service1}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder text-dark">PSD TO HTML</h5>
        <p class="card-text text-dark">
        I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website
        </p>
      </div>
    </div>
  </div>
  <div id="design" class="col py-5">
    <div class="card">
      <img
        src={service2}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder text-dark">WEB DESIGN</h5>
        <p class="card-text text-dark">
        I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below
        </p>
      </div>
    </div>
  </div>
  <div id="development" class="col py-5">
    <div class="card">
      <img
        src={service3}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bolder text-dark">WEB DEVELOPMENT</h5>
        <p class="card-text text-dark">
        I love to do web development. I use MongoDB for database and Express JS, Node Js for server side work. I have also knowledge of login authentication, private routing.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default MyServices;