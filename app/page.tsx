import React from 'react';
import Link from 'next/link';

import Overview from '@/components/about/Overview';
import Services from '@/components/services/Services';
import AboutBreif from '@/components/about/AboutBreif';
import VideoPresentation from '@/components/video/VideoPresentation';
import FeatureProjects from '@/components/projects/FeatureProjects';
import CallToContact from '@/components/call-to-action/CallToContact';
import MoorkLayout from '@/layout/MoorkLayout';
import MissionVision from '@/components/about/MissionVision';

export const metadata = {
  title:
    'Shafiq Glass & Aluminum | Glass Fabricators & Subcontractors - Bahrain',
  description:
    'Shafiq Glass & Aluminum delivers premium glass and aluminum solutions for residential, commercial, and industrial projects in Bahrain. Specialists in custom facades, partitions, windows, and doors.',
  keywords: [
    'Shafiq Glass Bahrain',
    'Aluminum Fabrication Bahrain',
    'Glass Partitions Bahrain',
    'Curtain Walls Bahrain',
    'Architectural Glass',
    'Aluminum Windows Bahrain',
    'Glass Doors Bahrain',
    'Commercial Glazing',
    'Structural Glazing Bahrain',
    'Glass Fabrication Bahrain',
    'Architectural Glazing Subcontractor',
    'Glass Subcontractors Bahrain',
    'Custom Glass Fabrication',
    'Curtain Wall Installation',
    'Aluminum Cladding Bahrain',
    'Glass & Aluminum Subcontracting',
  ],
  openGraph: {
    title: 'Shafiq Glass & Aluminum | Glass Fabrication Specialists',
    description:
      'Bahrain-based glass fabrication experts providing subcontracting services for commercial and residential construction projects.',
    url: 'https://shafiqglass.com',
    siteName: 'Shafiq Glass & Aluminum',
    images: [
      {
        url: 'https://shafiqglass.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Glass Fabrication Process at Shafiq Glass',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const HomePage = () => {
  return (
    <MoorkLayout>
      {/* Hero Banner */}
      <div
        className="mil-banner mil-banner-5 mil-bg-soft"
        style={{ backgroundImage: 'url(/img/home/hero.png)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    Trusted Experts in Glass & Aluminum Since 2005
                  </div>
                  <h1 className="mil-display-2 mil-light mil-mb-60">
                    Precision. <br />
                    Innovation. <br />
                    Excellence.
                  </h1>
                  <Link
                    href="/projects"
                    className="mil-btn mil-btn-border mil-light mil-with-arrow"
                  >
                    View Our Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame mil-up">
                {/* <img 
                  src="/img/home/hero-showcase.png" 
                  alt="Premium Glass & Aluminum Installation" 
                  className="mil-scale-img"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Banner */}

      <Overview />
      <MissionVision />
      <Services />
      <AboutBreif />
      <VideoPresentation />
      <FeatureProjects />
      <CallToContact />
    </MoorkLayout>
  );
};

export default HomePage;
