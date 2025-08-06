import React from 'react';
import MoorkLayout from '@/layout/MoorkLayout';
import PageBanner from '@/components/PageBanner';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import CallToContact from '@/components/call-to-action/CallToContact';
import { getAllProjects } from '@/data/projects';

const page = () => {
  const projects = getAllProjects();

  return (
    <MoorkLayout>
      {/* Page Banner */}
      <PageBanner
        pageName="Our Projects"
        pageUrl="projects"
        pageTitle="Our Projects"
        bgImg="/img/banners/banner.jpg"
      />

      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            {projects.map((project) => (
              <div className="col-md-6 mb-5" key={project.id}>
                <div className="mil-project-card mil-bg-soft p-3 mil-wwd-card">
                  <div className="mil-cover-frame mil-up">
                    <div className="mil-hover-frame">
                      <img
                        loading="lazy"
                        src={project.image}
                        alt={project.alt}
                        data-value-1={1}
                        data-value-2="1.1"
                        className="mil-scale-img"
                      />
                    </div>
                  </div>
                  <div className="mil-descr mil-pad-0 mil-up">
                    <h5 className="mil-mb-10">{project.title}</h5>
                    <p className="mil-mb-5">{project.subtitle}</p>
                    <p className="mil-text-sm mil-mb-5">
                      <strong>Client:</strong> {project.client} |{' '}
                      <strong>Contractor:</strong> {project.contractor}
                    </p>
                    <p className="mil-text-sm mil-mb-5">
                      <strong>Scope:</strong> {project.scope}
                    </p>
                    <p className="mil-text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5 mil-bg-soft">
        <WhyChooseUs />
      </div>
      <CallToContact />
    </MoorkLayout>
  );
};

export default page;
