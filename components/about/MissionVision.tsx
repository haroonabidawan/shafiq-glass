import React from 'react';
import { IoTelescope } from 'react-icons/io5';
import { FaGraduationCap, FaPencilRuler } from 'react-icons/fa';

const MissionVision = () => {
  const items = [
    {
      icon: <IoTelescope className="mil-light" fontSize="50px" />,
      title: 'Mission',
      description:
        'To embody excellence in our operations, delivering quality products and services across global markets.',
    },
    {
      icon: <FaGraduationCap className="mil-light" fontSize="50px" />,
      title: 'Vision',
      description:
        'With 15 years of experience, we aim to innovate unique glass materials using cutting-edge technologies and learning.',
    },
    {
      icon: <FaPencilRuler className="mil-light" fontSize="50px" />,
      title: 'Crafted Excellence',
      description:
        'Each project reflects our passion for precision and sets new benchmarks in architectural glass and aluminium solutions.',
    },
  ];

  return (
    <div className="mil-bg-accent py-5">
      <div className="container py-5">
        <div className="row mil-mb-50">
          {items.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mil-mb-50">
              <div className="h-100 d-flex align-items-center flex-column">
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
