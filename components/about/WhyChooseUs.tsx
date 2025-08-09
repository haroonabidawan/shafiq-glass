import React from 'react';
import {
  FaCheckCircle,
  FaIndustry,
  FaCertificate,
  FaProjectDiagram,
  FaUsersCog,
  FaClock,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Established Legacy Since 2006',
      description:
        'With nearly 20 years of experience, Shafiq Glass & Aluminum has become one of Bahrain’s most trusted names in glass and aluminium fabrication.',
      icon: <FaCheckCircle size={48} className="mil-accent" />,
    },
    {
      title: '10,700 SQM of Production Space',
      description:
        'Our two high-tech facilities in Hidd Industrial Area enable mass-scale production and custom fabrication under one roof.',
      icon: <FaIndustry size={48} className="mil-accent" />,
    },
    {
      title: 'Best Quality',
      description:
        'We adhere to international standards and local regulations to ensure consistent quality, safety, and durability in every project.',
      icon: <FaCertificate size={48} className="mil-accent" />,
    },
    {
      title: 'End-to-End Service',
      description:
        'From design consultation and engineering to production and on-site installation — we offer a complete solution with single-point accountability.',
      icon: <FaProjectDiagram size={48} className="mil-accent" />,
    },
    {
      title: 'Expert Workforce',
      description:
        'Our team includes over 200 certified engineers, designers, and technicians trained in modern fabrication and installation practices.',
      icon: <FaUsersCog size={48} className="mil-accent" />,
    },
    {
      title: 'Proven Timeliness',
      description:
        'We are recognized for consistently delivering projects on time, even under tight construction schedules.',
      icon: <FaClock size={48} className="mil-accent" />,
    },
  ];

  return (
    <div className="mil-p-100-100 mil-bg-soft">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mil-mb-60">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              WHY CHOOSE US
            </div>
            <h3 className="mil-mb-30 mil-up">
              Trusted Partner for Glass & Aluminum Solutions in Bahrain
            </h3>
            <p className="mil-up">
              We take pride in being the go-to subcontractor for commercial and
              residential developers across Bahrain. Here’s what sets us apart:
            </p>
          </div>
        </div>

        <div className="row">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-6 col-lg-4 mil-mb-60">
              <div className="mil-review-card">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-15">
                  {reason.icon}
                </div>
                <h5 className="mil-mb-10">{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
