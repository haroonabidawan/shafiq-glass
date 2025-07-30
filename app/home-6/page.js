"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={6}>
      {" "}
      {/* banner */}
      <div className="mil-banner mil-banner-6">
        <div className="mil-image-position-1">
          <div className="mil-banner-fly-image">
            <img loading="lazy" src="img/home-6/1.png" alt="building" />
          </div>
        </div>
        <div className="mil-image-position-2">
          <div className="mil-banner-fly-image">
            <img loading="lazy" src="img/home-6/2.png" alt="building" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-1" />
            <div className="col-xl-8">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    MØORK VISION:
                  </div>
                  <h1 className="mil-display-2 mil-light mil-mb-60">
                    Innovative <br />
                    Mega <br />
                    Buildings
                  </h1>
                  <div className="mil-mouse mil-light" />
                </div>
              </div>
            </div>
            <div className="col-xl-1">
              <div className="mil-banner-image-frame"></div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Where Architectural Innovation is Born
              </h2>
              <p className="mil-mb-50 mil-up">
                With almost a hundred talented professionals of various
                nationalities, Møork embraces the cultural diversity and
                uniqueness of each project.
              </p>
              <div className="mil-up mil-mb-100">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
              <div className="mil-image-simple mil-vert mil-up">
                <img
                  loading="lazy"
                  src="img/home-6/4.png"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
            </div>
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-image-simple mil-vert mil-up">
                <img
                  loading="lazy"
                  src="img/home-6/3.png"
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
      {/* projects */}
      <div className="mil-p-200-100 mil-bg-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                AN EXCLUSIVE LOOK AT THE ARCHITECTURAL AVANT-GARDE
              </div>
              <h2 className="mil-mb-30 mil-up">Most Recent Projects</h2>
              <p className="mil-mb-100 mil-up">
                From striking skyscrapers to captivating interior spaces, each
                project reflects our dedication to innovation and creativity.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <Swiper
                {...sliderProps.milProjects2}
                className="swiper-container mil-projects-2"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-6/5.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-with-bg mil-up">
                        <h4 className="mil-mb-10">
                          Inspiring Offices in New York
                        </h4>
                        <p>Business Inspiration</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-6/6.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-with-bg mil-up">
                        <h4 className="mil-mb-10">Nova Shopping Center</h4>
                        <p>Visionary Business Environments</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-6/7.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-with-bg mil-up">
                        <h4 className="mil-mb-10">Luminar Tower</h4>
                        <p>Iconic skyscrapers</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-6/2.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-with-bg mil-up">
                        <h4 className="mil-mb-10">Luminar Tower</h4>
                        <p>Iconic skyscrapers</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-6/3.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                      <div className="mil-descr mil-with-bg mil-up">
                        <h4 className="mil-mb-10">Luminar Tower</h4>
                        <p>Iconic skyscrapers</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-9">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                FORGING THE FUTURE OF ARCHITECTURE
              </div>
              <h2 className="mil-mb-30 mil-up">
                Our vision is to redefine the boundaries of architecture, fusing
                creativity and innovation to inspire and transform.
              </h2>
              <p className="mil-mb-100 mil-up">
                Discover how Møork's unique vision is shaping the future of
                architectural design and elevating <br /> aesthetics to new
                heights.
              </p>
            </div>
            <div className="col-lg-9 mil-mb-100">
              <div className="mil-image-simple mil-land mil-up">
                <img
                  loading="lazy"
                  src="img/home-6/8.png"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
            </div>
            <div className="col-lg-3 mil-mb-100">
              <div className="mil-image-simple mil-square mil-up">
                <img
                  loading="lazy"
                  src="img/home-6/9.png"
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
      {/* services */}
      <div className="mil-bg-dark mil-p-200-150">
        <div className="container">
          <ul className="mil-service-list mil-hover">
            <li className="mil-mb-50 mil-up" data-count={1}>
              <Link href="services" className="mil-service-item">
                <h2 className="mil-light mil-mb-15">Custom Interior Design</h2>
              </Link>
            </li>
            <li className="mil-mb-50 mil-up" data-count={2}>
              <Link href="services" className="mil-service-item">
                <h2 className="mil-light mil-mb-15">Urban Planning</h2>
              </Link>
            </li>
            <li className="mil-mb-50 mil-up" data-count={3}>
              <Link href="services" className="mil-service-item">
                <h2 className="mil-light mil-mb-15">
                  Furniture Design Consulting
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* services end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-70">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                CREATIVITY AND INNOVATION IN EVERY MIND
              </div>
              <h2 className="mil-mb-30 mil-up">
                Our Team: The Essence of Møork
              </h2>
              <p className="mil-mb-50 mil-up">
                At Møork, our strength lies in the diversity and synergy of our
                talented professionals.
              </p>
              <div className="row">
                <div className="col-6 col-sm-4 mil-mb-30">
                  <h3>
                    +{" "}
                    <span className="mil-counter" data-number={15}>
                      15
                    </span>
                  </h3>
                  <p className="mil-text-16 mil-dark">
                    Years <br />
                    of Creativity
                  </p>
                </div>
                <div className="col-6 col-sm-4 mil-mb-30">
                  <h3>
                    <span className="mil-counter" data-number={44}>
                      44
                    </span>
                  </h3>
                  <p className="mil-text-16 mil-dark">
                    International <br />
                    Projects:
                  </p>
                </div>
                <div className="col-6 col-sm-4 mil-mb-30">
                  <h3>
                    +{" "}
                    <span className="mil-counter" data-number={100}>
                      100
                    </span>
                  </h3>
                  <p className="mil-text-16 mil-dark">
                    Four <br />
                    Nationalities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-image-simple mil-land-plus mil-up">
                <img
                  loading="lazy"
                  src="img/home-6/10.png"
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
      {/* video */}
      <div className="mil-p-0-200">
        <div className="container">
          <div className="mil-video-frame mil-up">
            <img
              loading="lazy"
              src="img/home-6/11.png"
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
      {/* video end */}
      {/* call to action */}
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
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
