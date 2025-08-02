import React from 'react';
import Link from 'next/link';

const CallToContact = () => {
  return (
    <div
      className="mil-p-200-200 mil-bg-image"
      style={{
        backgroundImage: 'url(img/call-to-action/contact-background.png)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
              CONTACT US TO START YOUR NEXT PROJECT
            </div>
            <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
              Let’s bring your vision to life
            </h2>
            <p className="mil-light mil-mb-40 mil-up">
              If you would like to discuss your design needs, collaborate on a
              project or simply find out more about our work, please don’t
              hesitate to get in touch.
            </p>
            <div className="mil-up">
              <Link
                href="/contact"
                className="mil-btn mil-btn-sm mil-btn-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToContact;
