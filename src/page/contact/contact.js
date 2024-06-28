// Contact.js
import React, { forwardRef, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = forwardRef((props, ref) => {
    const map = <FontAwesomeIcon icon={faMapMarker} />;
    const phone = <FontAwesomeIcon icon={faPhone} />;
    const letter = <FontAwesomeIcon icon={faEnvelope} />;
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x4pp54d', 'template_s55zgdk', form.current, '6rh8UmCdYGIraOfyV')
          .then(
            () => {
              alert('Email Submited');
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
        e.target.reset();
    };

    return (
        <div ref={ref} className="contact-wrapper">
            <section className="contact" id="contact">
                <div className="container-contact">
                    <h2 className="contact-title">Contact</h2>
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <i>{map}</i>
                                <div className="topic">Address</div>
                                <div className="text-one">Vancouver BC</div>
                                <div className="text-two">5598 Ormidale Street</div>
                            </div>
                            <div className="phone details">
                                <i>{phone}</i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+1 (236)2342559</div>
                            </div>
                            <div className="email details">
                                <i>{letter}</i>
                                <div className="topic">Email</div>
                                <div className="text-one">felipefjbrito@gmail.com</div>
                            </div>
                        </div>

                        <div className="right-side">
                            <div className="topic-text">Send me a message</div>
                            <p>If you have any work for me or any types of question, you can send me message from here.</p>
                            <form ref={form} onSubmit={sendEmail} className="--form-control">
                                <div className="input-box">
                                    <input type="text" placeholder="Full Name" name="user_name" required />
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Email" name="user_email" required />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Subject" name="subject" required />
                                </div>
                                <div className="input-box message-box">
                                    <textarea name="message" cols="30" rows="10"></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="contact-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Contact;
