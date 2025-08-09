import React from 'react';
import MoorkLayout from '@/layout/MoorkLayout';
import PageBanner from '@/components/PageBanner';
import WhyChooseUs from '@/components/about/WhyChooseUs';

const RequestQuotation = () => {
  return (
    <MoorkLayout>
      {/* Page Banner */}
      <PageBanner
        pageName="Request Quotation"
        pageUrl="request-quotation"
        pageTitle="Request Quotation"
        bgImg="/img/banners/request-for-qoute.jpg"
      />

      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="mil-mb-10">Request Quotation</h2>
                <p>
                  Fill in the details below and our team will get back to you
                  shortly.
                </p>
              </div>

              <form action="/api/send-quotation" method="POST" className="">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <input
                    type="tel"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Phone"
                    name="phone"
                  />
                  <input
                    type="text"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Location"
                    name="location"
                    required
                  />
                  <textarea
                    name="projectDescription"
                    placeholder="Project Description"
                    className="mil-mb-30 mil-up"
                    rows={5}
                    required
                  />
                  <div className="mil-up">
                    <button type="submit" className="mil-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-center mt-4 mil-up">
                <p className="text-muted">
                  Prefer to contact us directly? Email us at{' '}
                  <a href="mailto:info@shafiqglass.com" className="mil-accent">
                    info@shafiqglass.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mil-p-200-0 mil-bg-soft">
        <WhyChooseUs />
      </div>
    </MoorkLayout>
  );
};

export default RequestQuotation;
