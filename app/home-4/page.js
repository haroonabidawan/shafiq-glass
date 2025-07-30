"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={4}>
      {/* banner */}
      <div className="mil-banner mil-banner-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <h1 className="mil-display-1 mil-mb-30">
                    Interior <br />
                    design
                    <br /> studio.
                  </h1>
                  <div className="mil-mouse mil-accent" />
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-banner-image-frame">
                <div className="mil-bannet-content-items">
                  <div className="mil-counter-item mil-accent-border mil-mb-60">
                    <h3 className="mil-mb-20">
                      <span className="mil-accent">+</span>
                      <span className="mil-counter" data-number={560}>
                        560
                      </span>
                    </h3>
                    <h5 className="mil-mb-20">
                      Completed interior design projects
                    </h5>
                    <p className="">
                      Designing completely adaptable and functional spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* image */}
      <div className="mil-fw-image">
        <img
          loading="lazy"
          src="img/home-4/1.png"
          alt="image"
          data-value-1={1}
          data-value-2="1.1"
          className="mil-scale-img"
        />
      </div>
      {/* image end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Møork: Defining the Future of Interior Design
              </h2>
              <p className="mil-mb-50 mil-up">
                At Møork, we have taken interior design to a new level since
                2010. With a diverse team of over 60 employees of 8
                nationalities, we have completed over 560 projects, marking our
                commitment to innovation and excellence.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-image-simple mil-square mil-up">
                <img
                  loading="lazy"
                  src="img/home-4/2.png"
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
      <div className="mil-p-0-150">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/6.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-up">Continuous Innovation</h5>
              <p className="mil-mb-20 mil-up">
                Our passion for innovation drives us to be at the forefront of
                trends and creative solutions in interior design.
              </p>
              <div className="mil-up">
                <Link href="services" className="mil-link mil-accent">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/7.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-up">Sustainable Approach</h5>
              <p className="mil-mb-20 mil-up">
                We are committed to designing spaces that are sustainable and
                environmentally friendly, contributing to a greener future.
              </p>
              <div className="mil-up">
                <Link href="services" className="mil-link mil-accent">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/8.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-up">Global Presence</h5>
              <p className="mil-mb-20 mil-up">
                Our passion for innovation drives us to be at the forefront of
                trends and creative solutions in interior design.
              </p>
              <div className="mil-up">
                <Link href="services" className="mil-link mil-accent">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* iconboxes end */}
      {/* projects */}
      <div className="mil-bg-dark mil-deco-line mil-more-space">
        <div className="container mil-relative">
          <img
            loading="lazy"
            src="img/home-4/portfolio.png"
            alt="portfolio"
            className="mil-large-title"
          />
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-soft mil-mb-30 mil-up">
                01. PUBLIC ARCHITECTURE
              </div>
              <h2 className="mil-mb-50 mil-light mil-up">
                Citizen's House in Chuzhou
              </h2>
              <div className="mil-up">
                <Link href="works-1" className="mil-link mil-accent">
                  See Project
                </Link>
              </div>
            </div>
            <div className="col-lg-8 mil-relative">
              <Swiper
                {...sliderProps.milProjects4}
                className="swiper-container mil-projects-4"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide
                    className="swiper-slide"
                    data-swiper-parallax-scale="0.15"
                  >
                    <Link href="work" className="mil-project-card mil-land">
                      <div className="mil-cover-frame mil-up">
                        <div className="mil-hover-frame">
                          <img
                            loading="lazy"
                            src="img/home-4/3.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
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
                            src="img/home-4/4.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
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
                            src="img/home-4/5.png"
                            alt="project"
                            data-value-1={1}
                            data-value-2="1.1"
                            className="mil-scale-img"
                          />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="mil-slider-nav mil-position-2 mil-up">
                <div className="mil-nav-btn mil-prev">
                  <i className="fas fa-arrow-left" />
                </div>
                <div className="mil-nav-btn mil-next">
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* video */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-play-sm mil-mb-30 mil-up">
                <a
                  href="https://vimeo.com/25428289"
                  className="mil-play-icon has-popup-video"
                >
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 10L0 20L8.83287e-07 0L17.5 10Z"
                      fill="#D94625"
                    />
                  </svg>
                </a>
                <div className="mil-suptitle mil-sm mil-accent">
                  PLAY VIDEO PRESENTATION 3:45 MIN
                </div>
              </div>
              <h2 className="mil-mb-30 mil-up">Proud of Our Work</h2>
              <p className="mil-up">
                At Møork, we take deep pride in every project we undertake.
                Discover our passion, our commitment and our focus in our
                presentation video. Immerse yourself in the world of interior
                design and architecture that reflects our firm commitment to
                excellence.
              </p>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-out-image mil-left mil-up">
                <img
                  loading="lazy"
                  src="img/home-4/7.png"
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
      {/* video end */}
      {/* brands */}
      <div className="mil-p-0-170">
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
      {/* reviews */}
      <div className="mil-bg-dark mil-p-200-200">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-soft mil-mb-30 mil-up">
                Testimonials
              </div>
              <h2 className="mil-mb-30 mil-light mil-up">
                What our clients say
              </h2>
              <div className="mil-up">
                <Link href="about" className="mil-link mil-light">
                  See all testimonials
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mil-review-card mil-deco mil-up">
                <p className="mil-text-30 mil-dark mil-mb-50">
                  Møork exceeded my expectations in every aspect.{" "}
                  <b>Their attention to detail and creativity</b> in the design
                  of my home was amazing
                </p>
                <div className="mil-card-info">
                  <div className="mil-review-author">
                    <img loading="lazy" src="img/users/3.png" alt="user" />
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
          </div>
        </div>
      </div>
      {/* reviews end */}
      {/* awards */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                LATEST RECOGNITIONS
              </div>
              <h2 className="mil-mb-30 mil-up">Our Most Recent Achievements</h2>
              <p className="mil-up">
                We are proud to share our most recent achievements and
                recognitions in the world of interior design and architecture.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row mil-mb-50">
                <div className="col-lg-2">
                  <h3 className="mil-accent mil-mb-30 mil-up">2023</h3>
                </div>
                <div className="col-lg-10">
                  <h5 className="mil-mb-15 mil-up">
                    Sustainability Award 2023
                  </h5>
                  <p className="mil-mb-15 mil-up">
                    Recognition for our commitment to sustainable and
                    environmentally friendly design.
                  </p>
                  <p className="mil-dark mil-up">Category: Sustainability</p>
                </div>
              </div>
              <div className="row mil-mb-50">
                <div className="col-lg-2">
                  <h3 className="mil-accent mil-mb-30 mil-up">2022</h3>
                </div>
                <div className="col-lg-10">
                  <h5 className="mil-mb-15 mil-up">
                    Best Office Design of the Year
                  </h5>
                  <p className="mil-mb-15 mil-up">
                    Our corporate headquarters in Hong Kong received the award
                    for best office design of the year.
                  </p>
                  <p className="mil-dark mil-up">Category: Office Design</p>
                </div>
              </div>
              <div className="row mil-mb-50">
                <div className="col-lg-2">
                  <h3 className="mil-accent mil-mb-30 mil-up">2022</h3>
                </div>
                <div className="col-lg-10">
                  <h5 className="mil-mb-15 mil-up">
                    Honorable Mention in Historical Renovation
                  </h5>
                  <p className="mil-mb-15 mil-up">
                    Recognition for our outstanding renovation of the Landerson
                    KAP Tower in Paris.
                  </p>
                  <p className="mil-dark mil-up">
                    Category: Historic Renovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* awards end */}
      {/* call to action */}
      <div className="mil-p-200-200 mil-bg-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 mil-text-center">
              <h2 className="mil-h1 mil-mb-50 mil-up">
                We talk about the Details
              </h2>
              <div className="mil-up">
                <Link href="contact" className="mil-btn mil-btn-border">
                  Contact us!
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
