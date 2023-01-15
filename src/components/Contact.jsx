import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../style/Contact.css";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container-fluid" style={{ marginTop: "70px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.143960265848!2d77.29748741469938!3d19.18891358702321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d690b626d831%3A0x1f1d9c59541d000b!2sMauli%20Medical%20And%20Genral%20Store!5e0!3m2!1sen!2sin!4v1673549960570!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="formpage">
        <section className="mb-4 ">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Talk to us
          </h2>

          <ul className="contact">
            <li>• Email - help@tagzfoods.com </li>
            <li>
              • Call / Whatsapp - +91-7019310491| Lines open from 11am to 6pm,
              Monday-Saturday
            </li>
            <li>
              • Address - 630, 14th Cross, near Domlur Flyover, Domlur I Stage,
              Bengaluru, Karnataka 560071
            </li>
          </ul>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label for="name" className="">
                        Your name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label for="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label for="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label for="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <br />
                <a
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>

            {/* Whatsapp logo  */}
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=919900001845&text=Hey%20BlissClub"
                class="btn-whatsapp-pulse"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
