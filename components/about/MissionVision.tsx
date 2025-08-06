import React from 'react';
import { IoTelescope } from 'react-icons/io5';
import { FaGraduationCap, FaPencilRuler } from 'react-icons/fa';

const MissionVision = () => {
  const items = [
    {
      icon: <IoTelescope className="mil-light" fontSize="50px" />,
      title: 'Vision',
      description:
        'To pioneer the production of innovative aluminium and glass products utilizing cutting-edge technology and continuous education.',
    },
    {
      icon: <FaGraduationCap className="mil-light" fontSize="50px" />,
      title: 'Mission',
      description:
        'We strive for excellence in providing top-tier quality products and services, backed by dedicated technical support for local, regional, and international markets.',
    },
    {
      icon: <FaPencilRuler className="mil-light" fontSize="50px" />,
      title: 'Our Commitment',
      description:
        'Delivering precision-crafted solutions that meet international standards and exceed client expectations in every project.',
    },
  ];

  return (
    <div className="mil-bg-accent py-5">
      <div className="container py-5">
        <div className="row mil-mb-50">
          {items.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mil-mb-50">
              <div className="h-100 d-flex align-items-center flex-column px-3">
                <div className="mil-icon mil-mb-30 mil-up">{item.icon}</div>
                <h5 className="mil-mb-20 mil-light mil-up">{item.title}</h5>
                <p className="mil-up mil-light mil-text-justify flex-grow-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
