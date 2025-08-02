import MoorkLayout from '@/layout/MoorkLayout';
import PageBanner from '@/components/PageBanner';
import VideoPresentation from '@/components/video/VideoPresentation';
import Services from '@/components/services/Services';
import FeatureProjects from '@/components/projects/FeatureProjects';
import CallToContact from '@/components/call-to-action/CallToContact';
import MissionVision from '@/components/about/MissionVision';

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

      {/* About Section */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-xl-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ABOUT US
              </div>
              <h2 className="mil-mb-30 mil-up">
                Crafting Excellence in Glass & Aluminium Since 2005
              </h2>
              <p className="mil-text-22 mil-mb-30 mil-up">
                Shafiq Glass & Art Frames Center W.L.L. is a trusted name in
                Bahrain’s construction and interior industry. With over 15 years
                of excellence, we specialize in custom-designed glass and
                aluminium solutions for residential, commercial, and government
                projects.
              </p>
              <p className="mil-up">
                Our offerings include structural glazing, glass partitions,
                curtain walls, balustrades, aluminium cladding, framed mirrors,
                art frames, and much more. Each solution is crafted with
                precision, quality materials, and a deep commitment to
                aesthetics and functionality.
              </p>
              <p className="mil-up">
                We work hand-in-hand with architects, interior designers, and
                developers to turn vision into reality. Through consistent
                innovation, project efficiency, and client satisfaction, we
                continue to raise the bar for architectural glass and aluminium
                across Bahrain and the GCC.
              </p>
            </div>

            <div className="col-xl-5 mil-mb-100">
              <div className="mil-image-simple mil-land-plus mil-up mil-mb-30">
                <img
                  loading="lazy"
                  src="img/about/about-1.jpg"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
              <div className="mil-image-simple mil-land-short mil-up">
                <img
                  loading="lazy"
                  src="img/about/about-2.jpg"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mil-p-0-100">
        <div className="container">
          <div className="mil-suptitle mil-sm mil-accent mil-up mil-mb-30">
            CERTIFICATIONS & COMPLIANCE
          </div>
          <h3 className="mil-mb-30 mil-up">Quality You Can Trust</h3>
          <p className="mil-up">
            Shafiq Glass & Art Frames Center W.L.L. is licensed by the Ministry
            of Industry, Commerce, and Tourism, Kingdom of Bahrain. All our work
            complies with national and international safety standards, and we
            continuously invest in training and innovation to uphold the highest
            levels of performance and compliance.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Services Summary */}
      <Services />

      {/* Featured Projects */}
      <FeatureProjects />

      {/* Video Presentation */}
      <VideoPresentation />

      {/* Call to Action */}
      <CallToContact />
    </MoorkLayout>
  );
};

export default page;
