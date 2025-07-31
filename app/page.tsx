import React from "react";

import Link from "next/link";
import Overview from "@/components/about/Overview";
import MissionVision from "@/components/about/MissionVision";
import Services from "@/components/services/Services";
import AboutBreif from "@/components/about/AboutBreif";
import VideoPresentation from "@/components/video/VideoPresentation";
import FeatureProjects from "@/components/projects/FeatureProjects";
import CallToContact from "@/components/call-to-action/CallToContact";
import MoorkLayout from "@/layout/MoorkLayout";

export const metadata = {
  title: "Glass & Aluminium Experts in Bahrain",
  description:
    "Explore Shafiq Glass & Aluminium’s expert solutions in custom glass, partitions, aluminium doors & more. Serving Bahrain for 15+ years.",
  keywords: [
    "Glass Bahrain",
    "Aluminium Fabrication",
    "Office Partitions",
    "Glass Company",
    "Aluminium Windows Bahrain",
  ],
  openGraph: {
    title: "Glass & Aluminium Experts in Bahrain",
    description:
      "Custom solutions in glass and aluminium for homes, offices, and commercial buildings in Bahrain.",
    url: "https://shafiqglass.com",
    siteName: "Shafiq Glass & Aluminium",
    images: [
      {
        url: "https://shafiqglass.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Shafiq Glass Home Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <MoorkLayout header={5}>

      {/* banner */}
      <div
        className="mil-banner mil-banner-5 mil-bg-soft"
        style={{ backgroundImage: "url(img/home/hero.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    EXPERTS IN GLASS & ALUMINIUM
                  </div>
                  <h1 className="mil-display-2 mil-light mil-mb-60">
                    Precision. <br />
                    Innovation. <br />
                    Excellence.
                  </h1>
                  <Link
                    href="projects"
                    className="mil-btn mil-btn-border mil-light mil-with-arrow"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame" />
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

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
export default page;
