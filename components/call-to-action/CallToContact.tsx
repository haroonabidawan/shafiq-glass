import React from 'react';
import Link from 'next/link';

const CallToContact = () => {
  return (
    <div
      className="mil-p-200-200 mil-bg-image"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 75%)), url(/img/call-to-action/contact-background.jpg)`,
      }}
    >
      <div className="container">
        <div className="d-flex flex-column">
          <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
            START YOUR PROJECT WITH BAHRAIN&apos;S GLASS & ALUMINUM EXPERTS
          </div>
          <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
            Precision Craftsmanship for Your Vision
          </h2>
          <p className="mil-light mil-mb-40 mil-up">
            Discuss your project requirements with our technical team for
            customized glass and aluminum solutions. From commercial facades to
            residential installations, we deliver craftsmanship that exceeds
            expectations.
          </p>
          <div className="d-flex flex-wrap gap-3 mil-up">
            <Link href="/contact" className="mil-btn mil-btn-sm mil-btn-light">
              Request a Consultation
            </Link>
            <Link
              href="tel:+97317732091"
              className="mil-btn mil-btn-sm mil-btn-border mil-light mx-3"
            >
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToContact;
