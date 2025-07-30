"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={1}>
      {/* banner */}
      <div className="mil-banner mil-banner-1 mil-bg-soft">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-mb-30">ARCHITECTURE</div>
                  <h1 className="mil-display-2 mil-mb-60">
                    We build innovative urban spaces
                  </h1>
                  <Link href="works-1" className="mil-btn mil-btn-border">
                    Explore projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame">
                <img loading="lazy" src="img/home-1/1.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Shaping the architectural future
              </h2>
              <p className="mil-mb-50 mil-up">
                Welcome to Møork, where architectural innovation meets a legacy
                of excellence. Founded in 2010, we have been at the forefront of
                redefining urban landscapes, combining creativity and addressing
                the changing needs of contemporary living.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-illustration-1">
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/2.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/3.png"
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
      {/* about end */}
      {/* projects */}
      <div className="mil-bg-soft mil-p-200-200">
        <div className="container mil-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR MOST RECENT PROJECTS
              </div>
              <h2 className="mil-mb-30 mil-up">Explore Our Projects</h2>
              <p className="mil-mb-100 mil-up">
                From striking skyscrapers to captivating interior spaces, each
                project reflects our dedication to innovation and creativity.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <Swiper
                {...sliderProps.milProjects1}
                className="swiper-container mil-projects-1"
              >
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/4.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">
                        Inspiring Offices in New York
                      </h4>
                      <p className="mil-mb-20">Business Inspiration</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/5.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">
                        Eco-district ZAC Victor Hugo, Bagneux
                      </h4>
                      <p className="mil-mb-20">Urban Planning</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/6.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/1.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/2.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="mil-slider-nav mil-position-1 mil-up">
            <div className="mil-nav-btn mil-prev mil-prev-1">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="mil-nav-btn mil-next mil-next-1">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* counters */}
      <div className="mil-bg-soft mil-p-0-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +{" "}
                <span className="mil-counter" data-number={10}>
                  10
                </span>
              </h3>
              <p className="mil-dark mil-mb-15">Years of Excellence</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                <span className="mil-counter" data-number={10}>
                  99
                </span>{" "}
                %
              </h3>
              <p className="mil-dark mil-mb-15">Gender equality rate</p>
              <p>
                Emphasizes our commitment to a diverse and inclusive work
                environment.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +
                <span className="mil-counter" data-number={10}>
                  60
                </span>{" "}
                Pro
              </h3>
              <p className="mil-dark mil-mb-15">Team Diversity</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* counters end */}
      {/* projects */}
      <div className="mil-p-200-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                INNOVATION AND INSPIRATION
              </div>
              <h2 className="mil-mb-30 mil-up">
                Exploring Architectural Marvels
              </h2>
              <p className="mil-mb-100 mil-up">
                Step into the realm of Møork's projects, where each endeavor is
                a testament to our passion for innovative design and
                architectural excellence.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Swiper
                {...sliderProps.milProjects2}
                className="swiper-container mil-projects-2"
              >
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/7.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
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
                          src="img/home-1/8.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">
                        Eco-district ZAC Victor Hugo, Bagneux
                      </h4>
                      <p>Urban Planning</p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/9.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
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
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
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
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p>Iconic skyscrapers</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* team */}
      <div className="mil-p-200-170 mil-bg-soft">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR PROJECTS
              </div>
              <h2 className="mil-mb-30 mil-up">Innovation in Action</h2>
              <p className="mil-mb-100 mil-up">
                Our passion for architecture and urban design is reflected in
                the projects we have carried out over the years.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/1.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Eddy Smith</h6>
                  <p>Creative Director</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/2.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Maria Rodriguez</h6>
                  <p>Principal Architect</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/3.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">David Chen</h6>
                  <p>Urban Design Specialist</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/4.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Lisa Walker</h6>
                  <p>Interior Architect</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* team end */}
      {/* brands */}
      <div className="mil-bg-soft mil-p-0-170">
        <div className="container">
          <p className="mil-mb-100 mil-dark mil-up">
            Building Futures Together with Our Esteemed Partners
          </p>
          <div className="row">
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/1.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/2.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/3.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/4.svg" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brands end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ENVIRONMENTAL RESPONSIBILITY
              </div>
              <h2 className="mil-mb-30 mil-up">
                Sustainable Architecture, Lasting Impact
              </h2>
              <p className="mil-mb-50 mil-up">
                Explore our dedication to green architecture, where innovation
                meets environmental stewardship, creating spaces that stand the
                test of time while preserving the planet.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-illustration-5">
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/10.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/11.png"
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
      {/* about end */}
      {/* call to action */}
      <div className="mil-p-200-200 mil-bg-accent">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                TAKE A LOOK AT
              </div>
              <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
                Сontact us to discuss the details
              </h2>
              <p className="mil-light mil-mb-50 mil-up">
                Contact us today to embark on a journey of collaborative design
                and architectural brilliance.
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
        </div>
      </div>
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
