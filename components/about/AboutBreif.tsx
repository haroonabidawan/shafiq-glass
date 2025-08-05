import React from 'react';
import Link from 'next/link';

const AboutBreif = () => {
  return (
    <div className="mil-p-200-100">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mil-mb-100">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              About Us
            </div>
            <h2 className="mil-mb-30 mil-up">
              Bahrain&apos;s Glass & Aluminum Experts Since 2006
            </h2>
            <p className="mil-mb-30 mil-up">
              Shafiq Glass & Aluminum has been delivering precision-engineered
              architectural solutions from our 5,500 sqm facility in Hidd
              Industrial Area. With state-of-the-art machinery and 50+ skilled
              professionals, we meet international standards for all glass and
              aluminum applications.
            </p>
            <p className="mil-mb-50 mil-up">
              From commercial curtain walls to residential installations, our
              end-to-end services ensure quality craftsmanship for every project
              across Bahrain.
            </p>
            <div className="mil-up">
              <Link href="/about" className="mil-btn mil-btn-sm mil-with-arrow">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mil-mb-100">
            <div className="mil-out-image mil-up">
              <img
                loading="lazy"
                src="img/about/about.jpg"
                alt="Shafiq Glass manufacturing facility"
                data-value-1={1}
                data-value-2="1.1"
                className="mil-scale-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBreif;
