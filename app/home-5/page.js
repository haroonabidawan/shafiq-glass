import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout header={5}>
      {/* banner */}
      <div
        className="mil-banner mil-banner-5 mil-bg-soft"
        style={{ backgroundImage: "url(img/home-5/1.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    EXPLORING THE ESSENCE
                  </div>
                  <h1 className="mil-display-2 mil-light mil-mb-60">
                    Building <br />
                    Architecture <br />
                    Studio
                  </h1>
                  <Link
                    href="works-1"
                    className="mil-btn mil-btn-border mil-light"
                  >
                    Explore projects
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
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                INTRODUCTION
              </div>
              <h2 className="mil-mb-30 mil-up">
                Raising Architecture to New Heights
              </h2>
              <p className="mil-mb-50 mil-up">
                Welcome to the exclusive introduction to Møork, where
                architecture becomes a vivid expression of innovation and
                vision. Founded in 2005 by Luca Dormunt, Møork has established
                itself as a global leader in building design, bringing
                excellence to every corner of the world.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-out-image mil-up">
                <img
                  loading="lazy"
                  src="img/home-5/2.png"
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
      {/* about end */}
      {/* iconboxes */}
      <div className="mil-bg-dark mil-p-200-150">
        <div className="container">
          <div className="row mil-mb-50">
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/9.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">Global Diversity</h5>
              <p className="mil-up">
                With employees of 4 nationalities, we approach international
                projects with cultural sensitivity and respect for the local
                environment.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/10.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">
                Multidisciplinary Innovation
              </h5>
              <p className="mil-up">
                Transdisciplinarity drives our approach, fusing architecture,
                interior design, landscape and more for unique results.
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/11.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">Intuitive Approach</h5>
              <p className="mil-up">
                We seek the essence of each creation, allowing intuition to
                guide our creative and conceptual process.
              </p>
            </div>
          </div>
          <div className="mil-up">
            {/* add "mil-text-center" to center the button */}
            <Link
              href="services"
              className="mil-btn mil-btn-border mil-light mil-with-arrow"
            >
              More about services
            </Link>
          </div>
        </div>
      </div>
      {/* iconboxes end */}
      {/* projects */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row mil-mb-100">
            <div className="col-lg-5">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                WHERE INNOVATION TAKES SHAPE
              </div>
              <h2 className="mil-mb-30 mil-up">Featured projects</h2>
              <p className="mil-up">
                Explore our diverse portfolio, where each work tells a unique
                story of visionary design and exceptional execution.
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-50">
              <Link href="work" className="mil-project-card mil-long-m">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/home-5/3.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Robston Tower: A Modern Commercial Icon
                  </h4>
                  <p>Modern building design</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-5 mil-displacement mil-mb-50">
              <Link href="work" className="mil-project-card mil-long-m">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/home-5/4.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Straworld Successful Collaboration Over Time
                  </h4>
                  <p>Sustainable &amp; Innovative Design</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-5 mil-mb-50">
              <Link href="work" className="mil-project-card mil-long-m">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/home-5/5.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Athons Hotels Creating Unique Experiences
                  </h4>
                  <p>Innovation in Hospitality</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-5 mil-displacement mil-mb-50">
              <Link href="work" className="mil-project-card mil-long-m">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/home-5/6.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Private Building: Personalized Harmony
                  </h4>
                  <p>Spaces that Reflect Unique Lifestyles</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* video */}
      <div className="mil-p-200-100 mil-bg-soft">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                VIDEO PRESENTATION
              </div>
              <h2 className="mil-mb-30 mil-up">Live the Møork Experience</h2>
              <p className="mil-up">
                Immerse yourself in our visual narrative and discover how
                architecture comes to life through this video
              </p>
            </div>
            <div className="col-lg-8 mil-mb-100">
              <div className="mil-video-frame mil-video-2 mil-up">
                <img
                  loading="lazy"
                  src="img/home-5/7.png"
                  alt="video cover"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
                <div className="mil-play">
                  <div>
                    <a
                      href="https://vimeo.com/25428289"
                      className="mil-play-icon has-popup-video"
                    >
                      <svg
                        width={35}
                        height={40}
                        viewBox="0 0 35 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.6667 20L0 40L1.74975e-06 0L34.6667 20Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <p className="mil-text-14 mil-light">PLAY VIDEO 3:45 MIN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video end */}
      {/* blog */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                KNOWLEDGE THAT DRIVES OUR CREATIVITY
              </div>
              <h2 className="mil-mb-30 mil-up">Explore our Insights</h2>
              <p className="mil-mb-100 mil-up">
                In the Møork Insights section, we share our unique perspective
                on architecture, design and the latest trends in the creative
                world.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mil-mb-50">
              <Link href="publication" className="mil-blog-card">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/blog/3.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h4 className="mil-mb-10">
                    The Art of Merging Styles: Residential Design Reimagined
                  </h4>
                  <p>Residential Spaces</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mil-mb-50">
              <Link href="publication" className="mil-blog-card">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/blog/4.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h4 className="mil-mb-10">
                    Interview with Julia Quadrifilios: Leading Innovation in
                    Design
                  </h4>
                  <p>Associate General Director</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* blog end */}
      {/* contact */}
      <div className="mil-bg-soft mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                CONNECT WITH MØORK!
              </div>
              <h2 className="mil-mb-30 mil-up">We'd love to hear from you!</h2>
              <p className="mil-up">
                Complete the contact form below and we will contact you to
                explore the possibilities.
              </p>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Subject"
                  />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    className="mil-mb-30 mil-up"
                    defaultValue={""}
                  />
                  <div className="mil-checkbox-frame mil-mb-30 mil-up">
                    <div className="mil-checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox" />
                    </div>
                    <p className="mil-text-14 mil-soft">
                      By clicking “Submit” you Accept the{" "}
                      <a href="#." className="mil-text-link">
                        processing of personal data
                      </a>
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
      {/* contact end */}
    </MoorkLayout>
  );
};
export default page;
