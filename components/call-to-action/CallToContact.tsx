import React from 'react';
import Link from 'next/link';

const CallToContact = () => {
  return (
    <div
      className="mil-p-200-200 mil-bg-image"
      style={{
        backgroundImage: 'url(/img/call-to-action/contact-background.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
              START YOUR PROJECT WITH BAHRAIN&apos;S GLASS & ALUMINUM EXPERTS
            </div>
            <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
              Precision Solutions for Your Architectural Vision
            </h2>
            <p className="mil-light mil-mb-40 mil-up">
              Discuss your project requirements with our technical team for
              customized glass and aluminum solutions. From commercial facades
              to residential installations, we deliver craftsmanship that
              exceeds expectations.
            </p>
            <div className="d-flex flex-wrap gap-3 mil-up">
              <Link
                href="/contact"
                className="mil-btn mil-btn-sm mil-btn-light"
              >
                Request a Consultation
              </Link>
              <Link
                href="tel:+97317732091"
                className="mil-btn mil-btn-sm mil-btn-border mil-light mx-3"
              >
                +973 1773 2091
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mil-mt-100 mil-mt-lg-0">
            <div className="mil-card mil-p-30 mil-up">
              <h4 className="mil-light mil-mb-20">Why Choose Us</h4>
              <ul className="mil-check-list mil-light">
                <li>20+ Years of Specialized Expertise</li>
                <li>State-of-the-Art Facility</li>
                <li>International Quality Standards</li>
                <li>End-to-End Project Management</li>
                <li>200+ Skilled Professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToContact;
