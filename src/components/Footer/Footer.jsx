"use client";

import React from "react";

function Footer() {
  return (
    <>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Join Our Community</h4>
          <p>
            Sign up to receive updates about our latest events, special offers,
            and exclusive promotions.
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <footer className="section-p1">
        <div className="col">
         <div className="logoF"> 
            <img
              src="/Screenshot__306_-removebg-preview.png"
              alt="Bar Logo"
            />
         </div>
          <h4>Contact Us</h4>
          <p>
            <strong>Address:</strong> 562 Wellington Road, Street 32, San
            Francisco
          </p>
          <p>
            <strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About Us</h4>
          <a href="#">Our Story</a>
          <a href="#">Events</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>Customer Services</h4>
          <a href="#">Reservation</a>
          <a href="#">Menu</a>
          <a href="#">Gift Cards</a>
          <a href="#">FAQ</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Connect With Us</h4>
          <p>Find our app on App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="App Store" />
            <img src="img/pay/play.jpg" alt="Google Play" />
          </div>
          <p>Secure Payment Gateways</p>
          <img src="img/pay/pay.png" alt="Payment Methods" />
        </div>

        <div className="copyright">
          <p>© 2024, Your Bar Name - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
