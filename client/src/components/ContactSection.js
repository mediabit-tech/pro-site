import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../App.css';

const ContactSection = () => {

  let [fields, setFields] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    sampleUrl: '',
    userMessage: ''
  });

  let navigate = useNavigate();

  function onChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // Function for sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jr5t7b', 'template_a8nfrs6', e.target, 'I4js-KoVGa-yXIozZ')
      .then((result) => {
        navigate('/');
        NotificationManager.success('Thanks for your suggestion', 'Successfully sent!', 5000);
      }, (error) => {
        NotificationManager.error('Error while submitting form!', error);
      });
  };

  return (
    <>
      <section className='mt-5 contact-area'>
        <div className="container">
          <div className="row contact-form-theme" id='contact-form-theme-with-id'>

            <div className="col-12">
              <div className="row ">
                <h1>Connect with us, If you have any suggesations or more questions.</h1>
                <div className="col-12">
                  <p className='main-hero-paragraph para'>Please send the message from the suggestion box, If you have any suggestions. We will give priority to your suggestions, If it is valuable.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className='main-heading'>Suggestion Box</h1>
                  <p className='main-hero-paragraph' style={{ color: "#3c1c0a", textAlign: "left" }}>This website is currently under development. We are constantly trying to make this method more useful for you. If you have more questions related to fullstack based on NodeJS then please mail us through this form and help us in creating better collection of fullstack questions based on NodeJS. <br /><br /> Upon submitting your message by clicking the button below, you will consent to the storage and handling of data by this website in accordance with the Policy.</p>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={sendEmail}>

                    <div className="row">
                      {/* User name */}
                      <div className="col-6 form-floating mb-3">
                        <input type="text" name="userFirstName" value={fields.userFirstName} onChange={onChange} className='form-control' placeholder='User First Name' required />
                        <label for="floatingTextarea2">Enter First Name</label>
                      </div>
                      <div className="col-6 form-floating mb-3">
                        <input type="text" name="userLastName" value={fields.userLastName} onChange={onChange} className='form-control' placeholder='User Last Name' required />
                        <label for="floatingTextarea2">Enter Last Name</label>
                      </div>
                    </div>

                    <div className="row">
                      {/* User info */}
                      <div className="col-6 form-floating mb-3">
                        <input type="email" name="userEmail" value={fields.userEmail} onChange={onChange} className='form-control' placeholder='Enter Email' required />
                        <label for="floatingTextarea2">Enter Valid Email</label>
                      </div>
                      <div className="col-6 form-floating mb-3">
                        <input type="url" name="sampleUrl" value={fields.sampleUrl} onChange={onChange} className='form-control' placeholder='Sample Url' required />
                        <label for="floatingTextarea2">Enter Source Url</label>
                      </div>
                    </div>

                    <div className="row">
                      {/* User message */}
                      <div className="col-12 form-floating">
                        <textarea name="userMessage" style={{ height: "15rem" }} value={fields.userMessage} onChange={onChange} className='form-control' placeholder='Enter your message' required />
                        <label for="floatingTextarea2">Type your suggestion</label>
                      </div>
                    </div>

                    {/* <div className="row">
                      <p className='contact-label'>Upon submitting your message by clicking the button below, you will consent to the storage and handling of data by this website in accordance with the Policy.</p>
                    </div> */}
                    {/* Form submit input */}
                    <div className="row mt-5 mb-5">
                      <div className="col-12">
                        <input type="submit" value=" Leave your suggesation " id="" onChange={onChange} className='btn btn-style w-auto' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection