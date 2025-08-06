import React from 'react';
import {
  FaBuilding,
  FaDoorOpen,
  FaColumns,
  FaLayerGroup,
  FaGripLines,
  FaGem,
} from 'react-icons/fa';

const capabilities = [
  {
    icon: <FaBuilding size={48} className="mil-accent" />,
    title: 'Structural Glazing',
    description: 'Modern curtain wall systems for commercial buildings',
  },
  {
    icon: <FaDoorOpen size={48} className="mil-accent" />,
    title: 'Windows & Doors',
    description: 'Custom aluminum windows, doors, and storefronts',
  },
  {
    icon: <FaColumns size={48} className="mil-accent" />,
    title: 'Glass Partitions',
    description: 'Interior glass systems for offices and commercial spaces',
  },
  {
    icon: <FaLayerGroup size={48} className="mil-accent" />,
    title: 'ACP Cladding',
    description: 'Aluminum composite panel installation for facades',
  },
  {
    icon: <FaGripLines size={48} className="mil-accent" />,
    title: 'Glass Railings',
    description: 'Safety glass railings for balconies and staircases',
  },
  {
    icon: <FaGem size={48} className="mil-accent" />,
    title: 'Specialty Glass',
    description: 'Tempered, laminated, fire-rated, and smart glass solutions',
  },
];

const OurCapabilities = () => {
  return (
    <div className="mil-p-200-100 mil-bg-soft">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mil-mb-60">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              OUR CAPABILITIES
            </div>
            <h3 className="mil-mb-30 mil-up">
              Specialized Glass & Aluminum Fabrication
            </h3>
            <p className="mil-up">
              As subcontractors, we excel in fabricating custom solutions to
              precise architectural specifications. Our capabilities include:
            </p>
          </div>
        </div>

        <div className="row">
          {capabilities.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mil-mb-60">
              <div className="mil-icon-box-2 mil-up mil-wwd-card p-4">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  {item.icon}
                </div>
                <h5 className="mil-mb-20">{item.title}</h5>
                <p className="mil-text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
