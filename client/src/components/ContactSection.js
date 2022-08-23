import React, { useState } from 'react'
import contactImg from "../internalImgs/contact-us.png"
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ContactSection = () => {

  let [fields, setFields] = useState({
    userFirstName: '',
    userLastName: '',
    userPhoneNumber: '',
    userEmailId: '',
    userAddress: '',
    userMessage: '',
    formCheckInput: ''
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
        NotificationManager.success('Thanks for Get In Touch with us! Our executive will try to contact you as soon as possible.', 'Successful!', 5000);
      }, (error) => {
        NotificationManager.error('Error while submitting form!', error);
      });
  };


  return (
    <>
      <section className='contact-section'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className='main-heading'>Get In Touch</h1>
                  <p className='main-hero-paragraph'>
                    <li> Please leave your message here based on your needs. </li>
                    <li> Our executive will try to contact you as soon as possible.</li>
                  </p>
                  <figure>
                    <img src={contactImg} alt="contactImg" className='img-fluid' />
                  </figure>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      {/* User first name */}
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="userFirstName" id="" value={fields.userFirstName} onChange={onChange} className='form-control' placeholder='First Name' required />
                      </div>
                      {/* User last name */}
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="userLastName" id="" value={fields.userLastName} onChange={onChange} className='form-control' placeholder='Last Name' required />
                      </div>
                    </div>
                    <div className="row">
                      {/* User phone number */}
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="number" name="userPhoneNumber" id="" value={fields.userPhoneNumber} onChange={onChange} className='form-control' placeholder='Phone Number' required />
                      </div>
                      {/* User email id */}
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="email" name="userEmailId" id="" value={fields.userEmailId} onChange={onChange} className='form-control' placeholder='Email Id' required />
                      </div>
                    </div>
                    <div className="row">
                      {/* User address */}
                      <div className="col-12 contact-input-field">
                        <input type="text" name="userAddress" id="" value={fields.userAddress} onChange={onChange} className='form-control' placeholder='Add Address' required />
                      </div>
                    </div>
                    <div className="row">
                      {/* User message */}
                      <div className="col-12">
                        <input type="text" name="userMessage" id="" value={fields.userMessage} onChange={onChange} className='form-control' placeholder='Enter your message' required />
                      </div>
                    </div>
                    {/* Form check input */}
                    <div class="form-check form-checkbox-style">
                      <input class="formCheckInput" className='form-check-input' type="checkbox" id="flexCheckChecked" value={fields.formCheckInput} onChange={onChange} required />
                      <label class="form-check-label" className='main-hero-paragraph'>
                        I agree that mediaBit team may contact me at the email address or phone number above and by using this form I agree to the storage and management of my data by this website in accordance with your policy.
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input type="submit" value="Get In Touch" id="" onChange={onChange} className='btn btn-style w-100 phone-style' />
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