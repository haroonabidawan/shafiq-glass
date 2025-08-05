import React from 'react';
import Link from 'next/link';

const Overview = () => {
  return (
    <div className="mil-p-200-100">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-lg-5 mil-mb-100">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              Overview
            </div>
            <h2 className="mil-mb-30 mil-up">
              Crafting Bahrain&apos;s Finest Glass & Aluminum Solutions
            </h2>
            <p className="mil-mb-50 mil-up">
              Since 2006, Shafiq Glass & Aluminum has been a trusted name in
              delivering architectural glass and aluminum solutions across
              Bahrain. Our expertise spans commercial facades to residential
              installations, combining precision engineering with innovative
              design in every project.
            </p>
            <div className="mil-up">
              <Link href="/about" className="mil-btn mil-btn-sm mil-with-arrow">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mil-mb-100">
            <div className="mil-illustration-1">
              <div className="mil-image-position mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    src="img/about/about-1.jpg"
                    alt="Shafiq Glass Project 1"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-image-position mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    src="img/about/about-2.jpg"
                    alt="Shafiq Glass Project 2"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
