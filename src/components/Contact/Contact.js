import React from 'react';
import './Contact.css'
import contact from '../../contact.png';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qj5n668', 'template_x8urtm4', e.target, 'user_62AgI8mGz2SZZShBnjZcN')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Good job!',
            'Your Message has been Submitted!',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
    return (
        <section class="contact-area py-5">
          <h2 className="fw-bolder pb-5">Contact Me</h2>
  <div id="contact" class="container">
    <div class="row py-5">
      <div class="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5 py-3">
        <img alt="" class="img-fluid" src={contact}/>
      </div>
      <div class="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ms-auto me-auto ms-lg-auto text-left py-3">
        <div class="row mt-4">
        <form onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-12 col-md my-3">
                    <input type="text" name="user_name" class="form-control" placeholder="Name"/>
                  </div>
                  <div class="col-12 col-md mt-4 mt-md-0">
                    <input type="email" name="user_email" class="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col">
                    <textarea class="form-control" name="message" rows="3" placeholder="How can I help?"></textarea>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-danger">Submit Me</button>
                  </div>
                </div>
              </form>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Contact;