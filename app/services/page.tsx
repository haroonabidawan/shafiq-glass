import React from 'react';
import MoorkLayout from '@/layout/MoorkLayout';
import PageBanner from '@/components/PageBanner';
import OurCapabilities from '@/components/services/OurCapabilities';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import CallToContact from '@/components/call-to-action/CallToContact';
import Services from '@/components/services/Services';

const page = () => {
  return (
    <MoorkLayout>
      {/* Page Banner */}
      <PageBanner
        pageName="Our Services"
        pageUrl="services"
        pageTitle="Glass & Aluminum Solutions"
        bgImg="/img/banners/banner.jpg"
      />

      <Services />

      <OurCapabilities />
      <WhyChooseUs />
      <CallToContact />
    </MoorkLayout>
  );
};

export default page;
