import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
export const Contact = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gywsdh",
        "template_9l94clu",
        form.current,
        "7ghwf6LLnpPncUfrV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent Successfully.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <section className="contact__container" id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h3>CONTACT</h3>
              <div className="links">
                <div className="link">
                  <a
                    href="https://www.linkedin.com/in/kevintamakuwala/"
                    target="_blank" rel="noreferrer"
                  >
                    <BsLinkedin className="linkedin" />
                  </a>
                </div>

                <div className="link">
                  <a href="mailto:kevintamakuwala16@gmail.com" target="_blank" rel="noreferrer">
                    <SiGmail className="mail" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://github.com/kevintamakuwala/" target="_blank" rel="noreferrer">
                    <BsGithub className="github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-item">
                  <input type="text" name="sender" required />
                  <label>Name:</label>
                </div>
                <div className="form-item">
                  <input type="email" name="email" required />
                  <label>Email:</label>
                </div>

                <div className="form-item">
                  <textarea name="message" required defaultValue={""} />
                  <label>Message:</label>
                </div>
                <input type="submit" className="btn lg send" value="Send" 
                id="link1" style={{color:"var(--blue-color-100)"}}>
                {/* <button  className="btn lg send"></button> */}
                </input>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;
