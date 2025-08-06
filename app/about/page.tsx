import React from 'react';
import { FaIndustry, FaUsers, FaAward } from 'react-icons/fa';

import MoorkLayout from '@/layout/MoorkLayout';
import PageBanner from '@/components/PageBanner';
import VideoPresentation from '@/components/video/VideoPresentation';
import Services from '@/components/services/Services';
import FeatureProjects from '@/components/projects/FeatureProjects';
import CallToContact from '@/components/call-to-action/CallToContact';
import MissionVision from '@/components/about/MissionVision';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurCapabilities from '@/components/services/OurCapabilities';

const page = () => {
  return (
    <MoorkLayout>
      {/* Page Banner */}
      <PageBanner
        pageName="About Us"
        pageUrl="about"
        pageTitle="About Us"
        bgImg="img/banners/banner.jpg"
      />

      {/* Company Overview */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR STORY
              </div>
              <h2 className="mil-mb-30 mil-up">
                Precision Fabricators Since 2006
              </h2>
              <p className="mil-text-22 mil-mb-30 mil-up">
                Established in 2006, Shafiq Glass & Aluminum has grown from a
                local glass workshop to Bahrain&apos;s leading fabrication
                facility. Following major expansion in 2014, our 5,500 sqm plant
                in Hidd Industrial Area now houses state-of-the-art equipment
                and a skilled team of 200+ professionals.
              </p>
              <p className="mil-mb-30 mil-up">
                As specialized subcontractors, we collaborate with
                Bahrain&apos;s top construction firms to deliver precision glass
                and aluminum solutions for architectural projects. Our expertise
                spans commercial facades, residential installations, and
                specialized architectural features.
              </p>

              <div className="mil-up mil-mt-40">
                <div className="mil-review-card py-2 mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-15">
                    <FaIndustry className="mil-accent" size={48} />
                  </div>
                  <h5 className="mil-mb-10">5,500 sqm Fabrication Facility</h5>
                  <p>Including 1,600 sqm dedicated storage area</p>
                </div>

                <div className="mil-review-card py-2 mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-15">
                    <FaUsers className="mil-accent" size={48} />
                  </div>
                  <h5 className="mil-mb-10">200+ Skilled Professionals</h5>
                  <p>Specialized in glass and aluminum fabrication</p>
                </div>

                <div className="mil-review-card py-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-15">
                    <FaAward className="mil-accent" size={48} />
                  </div>
                  <h5 className="mil-mb-10">International Standards</h5>
                  <p>Meeting global specifications for all works</p>
                </div>
              </div>
            </div>

            <div className="col-xl-5 mil-mb-100">
              <div className="mil-image-simple mil-land-plus mil-up mil-mb-30">
                <img
                  loading="lazy"
                  src="/img/about/about-1.jpg"
                  alt="Shafiq Glass fabrication facility in Hidd Industrial Area"
                />
              </div>
              <div className="mil-image-simple mil-land-short mil-up">
                <img
                  loading="lazy"
                  src="/img/about/about-2.jpg"
                  alt="Glass fabrication process at our facility"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <OurCapabilities />

      {/* Certifications */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="mil-suptitle mil-sm mil-accent mil-up mil-mb-30">
            CERTIFICATIONS & COMPLIANCE
          </div>
          <div className="row mil-mb-60">
            <div className="col-lg-6 mil-mb-60">
              <h3 className="mil-mb-30 mil-up">Quality Assurance</h3>
              <p className="mil-up">
                Shafiq Glass & Aluminum is licensed by the Ministry of Industry,
                Commerce, and Tourism, Kingdom of Bahrain. We maintain strict
                compliance with national and international safety standards.
              </p>
              <p className="mil-up">
                Our facility is certified to process specialized glass products
                including Sunlux, Stoppay Smart, Stoppay Ace, and iPlus Solid
                through our partnership with AGC Obekan.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1 mil-mb-60">
              <div className="mil-card mil-p-30 mil-up">
                <h3 className="mil-mb-30 mil-up">Our Certifications</h3>
                <ul className="mil-check-list ps-4">
                  <li>Ministry of Industry, Commerce & Tourism License</li>
                  <li>AGC Obekan Processing Certification</li>
                  <li>Bahrain Building Code Compliance</li>
                  <li>International Quality Standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Services Summary */}
      <Services />

      {/* Project Showcase */}
      <FeatureProjects />

      {/* Video Presentation */}
      <VideoPresentation />

      <WhyChooseUs />

      {/* Call to Action */}
      <CallToContact />
    </MoorkLayout>
  );
};

export default page;
