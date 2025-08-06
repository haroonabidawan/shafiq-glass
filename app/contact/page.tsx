import PageBanner from '@/components/PageBanner';
import MoorkLayout from '@/layout/MoorkLayout';

const page = () => {
  return (
    <MoorkLayout>
      <PageBanner
        pageName="Contact"
        pageTitle="Contact Us"
        pageUrl="contact"
        bgImg="/img/banners/banner.jpg"
      />

      {/* Contact Info */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mil-mb-50">
              <h5 className="mil-mb-20">
                Shafiq Glass & Art Frames Center W.L.L.
              </h5>
              <p className="mil-mb-10">
                Address:{' '}
                <span className="mil-dark">
                  Entrance: 2187, Road No: 1529, Hidd 0115,
                  <br />
                  Muharraq Governorate, Hidd Industrial Area, Bahrain
                </span>
              </p>
              <p className="mil-mb-10">
                Telephone: <span className="mil-dark">+973 17732091</span>
              </p>
              <p className="mil-mb-20">
                Email:{' '}
                <a href="mailto:info@shafiqglass.com" className="mil-dark">
                  info@shafiqglass.com
                </a>
              </p>
              <a href="tel:+97317732091" className="mil-link mil-accent">
                Call Now
              </a>
            </div>
            <div className="col-xl-6 mil-mb-50">
              <iframe
                src="https://maps.google.com/maps?q=Entrance%202187%2C%20Road%20No%201529%2C%20Hidd%200115%2C%20Bahrain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info End */}

      {/* Contact Form */}
      <div className="mil-p-0-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-center">
            <div className="col-lg-8 mil-text-center mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                CONTACT FORM
              </div>
              <h2 className="mil-up">We&apos;d love to hear from you!</h2>
              <p className="mil-soft mil-up">
                Whether you have a question about our services, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="col-lg-8 mil-mb-100">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    type="tel"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Subject"
                    required
                  />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    className="mil-mb-30 mil-up"
                    rows={5}
                    required
                  />
                  <div className="mil-checkbox-frame mil-mb-30 mil-up">
                    <div className="mil-checkbox">
                      <input type="checkbox" id="terms" required />
                      <label htmlFor="terms" />
                    </div>
                    <p className="mil-text-14 mil-soft">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy-policy" className="mil-text-link">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                  <div className="mil-up">
                    <button type="submit" className="mil-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form End */}
    </MoorkLayout>
  );
};

export default page;
