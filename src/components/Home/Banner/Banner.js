import React from 'react';
import profile from '../../../mahmudur.png';
import Typed from 'react-typed';
import './Banner.css';
import Fade from 'react-reveal/Fade';
const Banner = () => {
    return (
      <section class="banner">
      <div class="container">
        <div className="banner-content">
        <div class="row align-items-center">
          <div class="col-12 ml-auto col-md-6 col-lg-5 banner-left">
            
            <h1 className="fw-bolder">I am Mahmudur Rahman</h1> 
            <h4>I am a <Typed
                            strings={['React Developer','Programmer','Web Developer']}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        /></h4>
             <a className="btn btn-danger my-4 resume-btn" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1-Iq6Y-7O957MRrojguS2FAAFl6ta-C5F/view">Download Resume</a>
                       
          </div>
          <div class="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0 banner-right">
            <Fade right>
            <img alt="" class="img-fluid" src={profile} width="230"/>
            </Fade>
          </div>
        </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;
