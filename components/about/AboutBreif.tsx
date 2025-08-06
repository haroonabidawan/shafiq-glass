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
              Shafiq Glass & Aluminum has been a leader in architectural glass
              and aluminum solutions for nearly two decades. Operating from two
              state-of-the-art facilities in Hidd Industrial Area — spanning
              5,500 sqm and 5,200 sqm — we are equipped with modern machinery
              and a team of over 200 skilled professionals.
            </p>
            <p className="mil-mb-50 mil-up">
              From commercial facades to residential partitions, our commitment
              to precision, quality, and craftsmanship ensures we meet
              international standards across every project in Bahrain.
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
                src="/img/about/about.jpg"
                alt="Shafiq Glass & Aluminum manufacturing facility"
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
