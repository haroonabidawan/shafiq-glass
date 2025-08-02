'use client';

import React from 'react';
import {
  HiOutlineBuildingOffice2,
  HiOutlineSun,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCubeTransparent,
  HiOutlineWindow,
  HiOutlineViewColumns,
} from 'react-icons/hi2';

const whatWeDoData = [
  {
    title: 'Composite Cladding',
    description:
      'Aluminum Composite Material (ACM) is the material of choice when panel flatness and a high-performance finish are a must. Made from two sheets of aluminum bonded to a thermoplastic core.',
    icon: <HiOutlineBuildingOffice2 size={40} className="mil-accent" />,
  },
  {
    title: 'Spider System',
    description:
      'A point-supported glazing system using thermally toughened (tempered) glass in either single or insulated formats.',
    icon: <HiOutlineCubeTransparent size={40} className="mil-accent" />,
  },
  {
    title: 'Solar Shade',
    description:
      'Functional and clean design aesthetic to manage sunlight in modern interiors—optimizing natural light while reducing heat and glare.',
    icon: <HiOutlineSun size={40} className="mil-accent" />,
  },
  {
    title: 'Automatic Doors',
    description:
      'State-of-the-art door automation system with advanced mechanics and sleek styling, ideal for architectural projects.',
    icon: <HiOutlineArrowRightOnRectangle size={40} className="mil-accent" />,
  },
  {
    title: 'Skylights',
    description:
      'A complete range of structural glass skylights offering custom glazing, finishes, and limitless design possibilities.',
    icon: <HiOutlineViewColumns size={40} className="mil-accent" />,
  },
  {
    title: 'Doors and Windows',
    description:
      'Aluminium frames and fittings provide strength and lightweight performance, ensuring a minimal, clean look for any space.',
    icon: <HiOutlineWindow size={40} className="mil-accent" />,
  },
];

const WhatWeDo = ({ background = 'mil-bg-white', heading = 'What We Do' }) => {
  return (
    <section className={`mil-p-100-100 py-5 mb-3 ${background}`}>
      <div className="container">
        <div className="mil-mb-60 text-center">
          <h2 className="mil-up">{heading}</h2>
          <p className="mil-text-sm mil-up">
            An overview of our key offerings and systems.
          </p>
        </div>

        <div className="row">
          {whatWeDoData.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mil-mb-40">
              <div className="mil-bg-soft mil-up mil-wwd-card p-4 h-100 d-flex flex-column justify-content-start align-items-start text-start rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">{item.icon}</div>
                  <h5 className="mb-0 fw-semibold mil-accent">{item.title}</h5>
                </div>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
