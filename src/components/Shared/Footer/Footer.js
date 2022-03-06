import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
<div class="container-fluid bg-dark footer-area py-3">
  <footer
          class="text-center text-lg-start text-white"
          >
    <div class="container p-4 pb-0">
      <section class="">
        <div class="row">
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
            <p>
              <a href="/home#psd" class="text-white">PSD To HTML</a>
            </p>
            <p>
              <a href="/home#design" class="text-white">Web Design</a>
            </p>
            <p>
              <a href="/home#development" class="text-white">Web Developmemt</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> Sirajganj, Rajshahi, Bangladesh</p>
            <p><i class="fas fa-envelope mr-3"></i> smmahmudur.rahmanbd@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 880 1753 966 696</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 social-icon-area">
            <h6 class="text-uppercase mb-4 font-weight-bold">Follow me</h6>
            <a
               class="btn btn-danger btn-floating m-1"
               href="https://www.facebook.com/smmahmudur"
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

            <a
               class="btn btn-danger btn-floating m-1"
               href="https://twitter.com/smmahmudurbd"
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>
            <a
               class="btn btn-danger btn-floating m-1"
               href="https://www.linkedin.com/in/smmahmudur/"
               role="button"
               ><i class="fab fa-linkedin-in"></i
              ></a>
            <a
               class="btn btn-danger btn-floating m-1"
               href="https://github.com/mahmudurbd"
               role="button"
               ><i class="fab fa-github"></i
              ></a>
            <a
               class="btn btn-danger btn-floating m-1"
               href="https://stackoverflow.com/users/16840541/mahmudur-rahman"
               role="button"
               ><i class="fab fa-stack-overflow"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
    <div
         class="text-center p-3"
         >
      © 2021 Copyright |
       <a class="text-white text-decoration-none mx-1" href="https://mahmudur.netlify.app/"
         > Mahmudur Rahman</a
        >
    </div>
  </footer>

</div>

    );
};

export default Footer;