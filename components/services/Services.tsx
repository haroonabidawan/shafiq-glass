import React from 'react';
import Link from 'next/link';
import { getServicesList } from '@/data/services';

const Services = () => {
  // Use the helper function to get all services
  const services = getServicesList();

  return (
    <div className="mil-p-200-150">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-6 mil-mb-100 d-flex flex-column justify-content-center">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              SERVICES
            </div>
            <h2 className="mil-mb-30 mil-up">
              Comprehensive Glass & Aluminum Solutions for Every Project
            </h2>
            <p className="mil-up">
              Since 2006, Shafiq Glass & Aluminum has delivered
              precision-engineered solutions across Bahrain. Our expertise spans
              residential, commercial, and industrial applications, with
              end-to-end services from custom design to professional
              installation.
            </p>
          </div>

          {/* Right Services List */}
          <div className="col-lg-6">
            {services.map((service, index) => {
              const Icon = service.icon; // Get the icon component
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="text-decoration-none"
                >
                  <div className="mil-mb-40 mil-up">
                    <div className="mil-bg-soft mil-wwd-card p-4 h-100 d-flex flex-column justify-content-start align-items-start text-start rounded shadow-sm hover-mil-scale">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <Icon size={40} className="mil-accent" />
                        </div>
                        <h5 className="mb-0 fw-semibold mil-accent">
                          {service.title}
                        </h5>
                      </div>
                      <p className="text-sm">{service.description}</p>
                      <div className="mt-auto pt-2">
                        <span className="mil-link mil-text-sm">
                          Explore Services
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
