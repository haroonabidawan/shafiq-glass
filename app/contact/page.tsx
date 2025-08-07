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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4404.568926122472!2d50.6742809!3d26.210136799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af4c3ef61235%3A0xa818ca9d319c4224!2sShafiq%20Glass%20%26%20Aluminum!5e1!3m2!1sen!2sbh!4v1754574747826!5m2!1sen!2sbh"
                width="100%"
                height="400"
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
