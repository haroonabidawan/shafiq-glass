import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mil-bg-dark">
      <div className="container pt-5">
        <div className="row">
          <div className="col-xl-3 col-md-6 mil-mb-60">
            <div className="mil-footer-logo mil-up mil-mb-30">
              <img
                loading="lazy"
                src="/logo.png"
                alt="Shafiq Glass & Aluminum"
                className="mil-logo"
              />
            </div>
            <p className="mil-light-soft mil-up mil-mb-30">
              Precision glass and aluminum solutions since 2005, serving
              Bahrain&apos;s architectural and construction industries with
              quality craftsmanship.
            </p>
          </div>

          <div className="col-xl-3 col-md-6 mil-mb-60">
            <h6 className="mil-light mil-mb-30 mil-up">Factory Location</h6>
            <p className="mil-light-soft mil-mb-20 mil-up">
              Shafiq Glass & Aluminum
              <br />
              Entrance: 2187, Road: 1529,
              <br />
              Hidd Industrial Area, Block 701,
              <br />
              Kingdom of Bahrain
            </p>
            <div className="mil-up mil-mb-20">
              <a href="tel:+97317732091" className="mil-light">
                +973 1773 2091
              </a>
            </div>
            <div className="mil-up">
              <a href="mailto:info@shafiqglass.com" className="mil-light">
                info@shafiqglass.com
              </a>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mil-mb-60">
            <h6 className="mil-light mil-mb-30 mil-up">Quick Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-up mil-mb-15">
                <Link href="/" className="mil-light-soft">
                  Home
                </Link>
              </li>
              <li className="mil-up mil-mb-15">
                <Link href="/about" className="mil-light-soft">
                  About Us
                </Link>
              </li>
              <li className="mil-up mil-mb-15">
                <Link href="/services" className="mil-light-soft">
                  Services
                </Link>
              </li>
              <li className="mil-up mil-mb-15">
                <Link href="/projects" className="mil-light-soft">
                  Projects
                </Link>
              </li>
              <li className="mil-up">
                <Link href="/contact" className="mil-light-soft">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-xl-4 col-md-6 mil-mb-60">
            <h6 className="mil-light mil-mb-30 mil-up">Business Hours</h6>
            <p className="mil-light-soft mil-mb-20 mil-up">
              Sunday - Thursday: 8:00 AM - 5:00 PM
              <br />
              Friday: Closed
              <br />
              Saturday: 9:00 AM - 1:00 PM
            </p>
            <h6 className="mil-light mil-mb-20 mil-up">Stay Connected</h6>
            <div className="mil-social-icons mil-up">
              <a
                href="https://facebook.com/shafiqglass"
                target="_blank"
                rel="noopener noreferrer"
                className="mil-social-btn mil-light px-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com/shafiqglass"
                target="_blank"
                rel="noopener noreferrer"
                className="mil-social-btn mil-light px-2"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/company/shafiqglass"
                target="_blank"
                rel="noopener noreferrer"
                className="mil-social-btn mil-light px-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/shafiqglass"
                target="_blank"
                rel="noopener noreferrer"
                className="mil-social-btn mil-light px-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mil-border-top mil-pt-30 mil-pb-30">
        <div className="mil-footer-bottom">
          <p className="mil-text-sm mil-light-soft mil-up">
            © {currentYear} Shafiq Glass & Aluminum. All rights reserved.
          </p>
          <p className="mil-text-sm mil-light-soft mil-up">
            Designed & Developed by{' '}
            <a href="mailto:haroon.abid.1999@gmail.com" className="mil-link">
              Buntoo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
