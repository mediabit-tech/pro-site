import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ContactSection = () => {

  let [fields, setFields] = useState({
    userName: '',
    userEmailId: '',
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
        NotificationManager.success('Thanks for your suggestion', 'Successfully sent!', 6000);
      }, (error) => {
        NotificationManager.error('Error while submitting form!', error);
      });
  };

  return (
    <>
      <section className='mt-5 contact-area'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className='main-heading'>Suggestion Box</h1>
                  <p className='main-hero-paragraph'>This website is currently under development. We are constantly trying to make this method more useful for you. Please send the message from the suggestion box, If you have any suggestions. We will give priority to your suggestions, If it is valuable.</p>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      {/* User name */}
                      <div className="col-6 form-floating mb-3">
                        <input type="text" name="userName" value={fields.userName} onChange={onChange} className='form-control' placeholder='First Name' required />
                        <label for="floatingTextarea2">Enter name</label>
                      </div>
                      <div className="col-6 form-floating mb-3">
                        <input type="email" name="userEmailId" value={fields.userEmailId} onChange={onChange} className='form-control' placeholder='Email Id' required />
                        <label for="floatingTextarea2">Enter email</label>
                      </div>
                    </div>
                    <div className="row">
                      {/* User message */}
                      <div className="col-12 form-floating">
                        <textarea name="userMessage" value={fields.userMessage} onChange={onChange} className='form-control' placeholder='Enter your message' required />
                        <label for="floatingTextarea2">Type your suggestion</label>
                      </div>
                    </div>

                    <div className="row">
                      <p className='contact-label'>Upon submitting your message by clicking the button below, you will consent to the storage and handling of data by this website in accordance with the Policy.</p>
                    </div>
                    {/* Form submit input */}
                    <div className="row">
                      <div className="col-12">
                        <input type="submit" value="Leave your suggesation" id="" onChange={onChange} className='btn btn-style w-50' />
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