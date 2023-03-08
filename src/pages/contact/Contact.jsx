import React from "react";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
export const Contact = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });
  return (
    <>
      {isLoading ? <Loader></Loader>:
    <section className="contact__container" id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h3>CONTACT</h3>
          <div className="links">
            <div className="link">
              <a href="https://www.linkedin.com/in/kevintamakuwala/" target="_blank">
                <BsLinkedin className="linkedin" />
              </a>
            </div>

            <div className="link">
              <a href="mailto:kevintamakuwala16@gmail.com" target="_blank">
                <SiGmail 
                className="mail"
                />
              </a>
            </div>
            <div className="link">
              <a href="github.com/kevintamakuwala" target="_blank">
                <BsGithub
                className="github" 
                 />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
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
            <button className="btn lg send">Send</button>
          </form>
        </div>
      </div>
    </section>}
    </>
  );
};

export default Contact;
