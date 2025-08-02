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
              A Legacy of Precision and Innovation
            </h2>
            <p className="mil-mb-50 mil-up">
              Since our inception, Shafiq Glass & Aluminium has been redefining
              the standards of architectural glazing and aluminium works across
              Bahrain. With a focus on quality craftsmanship, cutting-edge
              technology, and customer satisfaction, we’ve proudly completed a
              wide range of residential, commercial, and industrial projects for
              over 15 years.
            </p>
            <p className="mil-mb-50 mil-up">
              Our experienced team ensures each solution is tailored to meet the
              aesthetic and functional needs of every space—turning your vision
              into a reality with unmatched attention to detail.
            </p>
            <div className="mil-up">
              <Link href="/about" className="mil-btn mil-btn-sm">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mil-mb-100">
            <div className="mil-out-image mil-up">
              <img
                loading="lazy"
                src="img/home/about.jpg"
                alt="Shafiq Glass About Image"
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
