"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={2}>
      {/* banner */}
      <div className="mil-banner mil-banner-2">
        <div className="container">
          <div className="row flex-sm-row-reverse">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    ARCHITECTURE
                  </div>
                  <h1 className="mil-display-1 mil-mb-30">
                    Evolving <br />
                    modern <br />
                    arch.
                  </h1>
                  <div className="mil-mouse" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame">
                <img loading="lazy" src="img/home-2/1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about */}
      <div className="mil-p-200-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Innovative Design and Urban Transformation
              </h2>
              <p className="mil-mb-50 mil-up">
                At Møork, our passion for architecture is reflected in every
                project we undertake. Since 2010, we have combined experience,
                innovation and adaptability to shape modern and functional
                environments.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-illustration-2 mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/2.png"
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
      {/* about end */}
      {/* about */}
      <div className="mil-bg-dark mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR PROCESS
              </div>
              <h2 className="mil-light mil-mb-30 mil-up">
                Creative Design and Effective Methodology
              </h2>
              <p className="mil-mb-50 mil-up">
                Each project we tackle follows a structured approach that
                guarantees excellence in architecture and urban design. Discover
                how we bring our ideas to life through our process.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-illustration-3 mil-up">
                <div className="mil-image-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/3.png"
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
      {/* about end */}
      {/* iconboxes */}
      <div className="mil-bg-dark mil-p-0-200">
        <div className="container">
          <Swiper
            {...sliderProps.milIconbox}
            className="swiper-container mil-iconbox"
          >
            <SwiperSlide className="swiper-slide">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/1.png" alt="icon" />
              </div>
              <h5 className="mil-light mil-mb-20 mil-up">
                Research and Conceptualization
              </h5>
              <p className="mil-up">
                We thoroughly understand the needs of the project and create a
                solid vision.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/2.png" alt="icon" />
              </div>
              <h5 className="mil-light mil-mb-20 mil-up">
                Collaborative Design
              </h5>
              <p className="mil-up">
                We thoroughly understand the needs of the project and create a
                solid vision.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/5.png" alt="icon" />
              </div>
              <h5 className="mil-light mil-mb-20 mil-up">
                Continuous Innovation
              </h5>
              <p className="mil-up">
                Our passion for innovation drives us to be at the forefront of
                creative solutions.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/3.png" alt="icon" />
              </div>
              <h5 className="mil-light mil-mb-20 mil-up">
                Sustainable Development
              </h5>
              <p className="mil-up">
                We thoroughly understand the needs of the project and create a
                solid vision.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/4.png" alt="icon" />
              </div>
              <h5 className="mil-light mil-mb-20 mil-up">
                Execution and Efficient Delivery
              </h5>
              <p className="mil-up">
                We thoroughly understand the needs of the project and create a
                solid vision.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* iconboxes end */}
      {/* projects */}
      <div className="mil-p-200-200">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
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
        </div>
        <div className="row g-0">
          <div className="col-lg-3">
            <Link href="work" className="mil-project-card">
              <div className="mil-cover-frame mil-up">
                <div className="mil-hover-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/4.png"
                    alt="project"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-descr mil-border mil-up">
                <h4 className="mil-mb-10">Inspiring Offices in New York</h4>
                <p>Business Inspiration</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link href="work" className="mil-project-card mil-long">
              <div className="mil-cover-frame mil-up">
                <div className="mil-hover-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/5.png"
                    alt="project"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-descr mil-border mil-up">
                <h4 className="mil-mb-10">Lopez Tower of Paris</h4>
                <p>Retail, Intimate Environment</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link href="work" className="mil-project-card">
              <div className="mil-cover-frame mil-up">
                <div className="mil-hover-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/6.png"
                    alt="project"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-descr mil-border mil-up">
                <h4 className="mil-mb-10">Residential Building in Stockholm</h4>
                <p>Housing, Ecological Design</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link href="work" className="mil-project-card mil-long">
              <div className="mil-cover-frame mil-up">
                <div className="mil-hover-frame">
                  <img
                    loading="lazy"
                    src="img/home-2/7.png"
                    alt="project"
                    data-value-1={1}
                    data-value-2="1.1"
                    className="mil-scale-img"
                  />
                </div>
              </div>
              <div className="mil-descr mil-border mil-up">
                <h4 className="mil-mb-10">Innovative Laboratory</h4>
                <p>Medical Innovation</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* brands */}
      <div className="mil-p-200-170 mil-bg-soft">
        <div className="container">
          <div className="row justify-content-center align-items-center mil-mb-100">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                Our clients
              </div>
              <h2 className="mil-mb-30 mil-up">Our clients</h2>
              <p className="mil-up">
                Discover why our clients choose Møork to transform their visions
                into exceptional architectural realities.
              </p>
            </div>
          </div>
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
      {/* video */}
      <div className="mil-p-0-200 mil-bg-soft mil-half-bg">
        <div className="container">
          <div className="mil-video-frame mil-up">
            <img
              loading="lazy"
              src="img/home-2/8.png"
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
      {/* team */}
      <div className="mil-p-0-150">
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
            <div className="col-lg-3 mil-mb-50">
              <Link href="about" className="mil-team-card">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-2/1.png"
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
            <div className="col-lg-3 mil-mb-50">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-2/2.png"
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
            <div className="col-lg-3 mil-mb-50">
              <Link href="about" className="mil-team-card">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-2/3.png"
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
            <div className="col-lg-3 mil-mb-50">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-2/4.png"
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
      {/* call to action */}
      <div
        className="mil-p-200-200 mil-bg-image"
        style={{ backgroundImage: "url(img/home-2/9.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                CONTACT US TO START YOUR NEXT PROJECT
              </div>
              <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
                info@moork.studio
              </h2>
              <p className="mil-light mil-up">
                If you would like to discuss your design needs, collaborate on a
                project or simply find out more about our work, please do not
                hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
