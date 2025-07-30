import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="mil-p-200-100 mil-bg-accent">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 mil-mb-100">
            <div className="mil-cta-box mil-item-1">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                METHODOLOGY
              </div>
              <h2 className="mil-h2 mil-light mil-mb-30 mil-up">
                Our methodology: <br />
                Møor-GT
              </h2>
              <p className="mil-light mil-mb-50 mil-up">
                Discover how we shape the future with focus and a distinctive
                touch of innovation.
              </p>
              <div className="mil-up">
                <Link
                  href="contact"
                  className="mil-btn mil-btn-border mil-light"
                >
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mil-mb-100">
            <div className="mil-cta-box mil-item-2">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                PROJECTS
              </div>
              <h2 className="mil-h2 mil-light mil-mb-30 mil-up">
                Explore the Latest Projects
              </h2>
              <p className="mil-light mil-mb-50 mil-up">
                Immerse yourself in our dynamic portfolio and experience the
                architectural excellence that defines Møork.
              </p>
              <div className="mil-up">
                <Link
                  href="works-1"
                  className="mil-btn mil-btn-border mil-light"
                >
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
