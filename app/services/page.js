import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout>
      {/* banner */}
      <PageBanner
        pageName="Services"
        pageTitle="Services"
        pageUrl="services"
        bgImg="/img/services/1.png"
      />

      {/* banner end */}
      {/* services */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3">
              <Link href="services" className="mil-service-side mil-mb-50">
                <h5 className="mil-mb-15 mil-accent mil-up">
                  Architectural design
                </h5>
                <p className="mil-up">
                  Creation of captivating and functional environments for
                  diverse spaces.
                </p>
              </Link>
              <Link href="services" className="mil-service-side mil-mb-50">
                <h5 className="mil-mb-15 mil-up">Urban Planning</h5>
                <p className="mil-up">
                  We approach projects of any scale with a comprehensive
                  approach.
                </p>
              </Link>
              <Link href="services" className="mil-service-side mil-mb-200">
                <h5 className="mil-mb-15 mil-up">Small Group Work</h5>
                <p className="mil-up">
                  Unique composition that leaves its mark on each project,
                  encouraging open dialogue and creativity.
                </p>
              </Link>
            </div>
            <div className="col-xl-8">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ARCHITECTURAL DESIGN
              </div>
              <h2 className="mil-mb-30 mil-up">
                Transforming Ideas into Unique Spaces
              </h2>
              <p className="mil-text-22 mil-mb-30 mil-up">
                Our Architectural Design service goes beyond the creation of
                structures; It is an artistic expression that fuses
                functionality and aesthetics.
              </p>
              <p className="mil-up mil-mb-50">
                From innovative concepts to meticulous execution, our team of
                industry-leading architects will transform your ideas into
                extraordinary architectural spaces.
              </p>
              <div className="mil-image-simple mil-land mil-up mil-mb-100">
                <img
                  loading="lazy"
                  src="img/services/2.png"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6 mil-mb-100">
                  <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                    PERSONALIZED
                  </div>
                  <h3 className="mil-mb-30 mil-up">Personalized design:</h3>
                  <p className="mil-up mil-mb-30">
                    Each project is approached with a customized approach to
                    ensure it reflects our clients' unique needs and visions.
                  </p>
                  <p className="mil-up">
                    Fusce fermentum velit nulla duis tempor id porta est
                    maecenas, magnis quam sapien placerat faucibus phasellus
                    proin aliquet, magna nostra netus volutpat parturient donec
                    nec facilisis.
                  </p>
                </div>
                <div className="col-xl-5 mil-mb-100">
                  <div className="mil-image-simple mil-vert mil-up">
                    <img
                      loading="lazy"
                      src="img/services/3.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                <div className="col-xl-6 mil-mb-100">
                  <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                    TECHNOLOGY
                  </div>
                  <h3 className="mil-mb-30 mil-up">Innovative technology:</h3>
                  <p className="mil-up mil-mb-30">
                    We use the latest tools and technologies in architec design
                    to ensure accuracy and efficiency in each project, from
                    conception to delivery.
                  </p>
                  <p className="mil-up">
                    Fusce fermentum velit nulla duis tempor id porta est
                    maecenas, magnis quam sapien placerat faucibus{" "}
                  </p>
                </div>
                <div className="col-xl-5 mil-mb-100">
                  <div className="mil-image-simple mil-vert mil-up">
                    <img
                      loading="lazy"
                      src="img/services/4.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6 mil-mb-100">
                  <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                    SUSTAINABILITY
                  </div>
                  <h3 className="mil-mb-30 mil-up">
                    Integrated Sustainability:
                  </h3>
                  <p className="mil-up mil-mb-30">
                    Our approach incorporates sustainable and eco-friendly
                    practices, ensuring that each design contributes to the
                    well-being of the environment.
                  </p>
                  <p className="mil-up">
                    Fusce fermentum velit nulla duis tempor id porta est
                    maecenas, magnis quam sapien placerat faucibus{" "}
                  </p>
                </div>
                <div className="col-xl-5 mil-mb-100">
                  <div className="mil-image-simple mil-vert mil-up">
                    <img
                      loading="lazy"
                      src="img/services/5.png"
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
        </div>
      </div>
      {/* faq */}
      <div className="mil-bg-dark mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ANSWERS TO YOUR QUERIES
              </div>
              <h2 className="mil-light mil-up">Clarifying Common Inquiries</h2>
            </div>
            <div className="col-xl-6 mil-mb-100">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}
      {/* reviews */}
      <div className="mil-p-200-170">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-review-card">
                <p className="mil-text-22 mil-dark mil-mb-50">
                  The Møork team transformed our retail space in a unique way.
                  Now, we attract more customers than ever
                </p>
                <div className="mil-card-info">
                  <div className="mil-review-author">
                    <img loading="lazy" src="img/users/1.png" alt="user" />
                    <div className="mil-user-name">
                      <h6 className="mil-mb-10">Miriane Doyle</h6>
                      <p className="mil-text-16">Store Owner in Marseille</p>
                    </div>
                  </div>
                  <svg
                    width={54}
                    height={36}
                    viewBox="0 0 54 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54 24.0277V0H29.9723V24.0277H42.0311V36L54 24.0277ZM11.972 36L24.0277 24.0277V0H0V24.0277H11.972V36Z"
                      fill="#D94625"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-review-card">
                <p className="mil-text-22 mil-dark mil-mb-50">
                  Møork's ability to combine design and functionality is
                  amazing. Living in our new space is a daily pleasure.
                </p>
                <div className="mil-card-info">
                  <div className="mil-review-author">
                    <img loading="lazy" src="img/users/2.png" alt="user" />
                    <div className="mil-user-name">
                      <h6 className="mil-mb-10">Jovanović Doyle</h6>
                      <p className="mil-text-16">Andersson Family</p>
                    </div>
                  </div>
                  <svg
                    width={54}
                    height={36}
                    viewBox="0 0 54 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54 24.0277V0H29.9723V24.0277H42.0311V36L54 24.0277ZM11.972 36L24.0277 24.0277V0H0V24.0277H11.972V36Z"
                      fill="#D94625"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reviews end */}
      {/* call to action */}
      <CallToAction />
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
