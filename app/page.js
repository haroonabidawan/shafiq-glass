"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={5}>

      {/* banner */}
      <div
        className="mil-banner mil-banner-5 mil-bg-soft"
        style={{ backgroundImage: "url(img/home/hero.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-light mil-mb-30">
                    EXPERTS IN GLASS & ALUMINIUM
                  </div>
                  <h1 className="mil-display-2 mil-light mil-mb-60">
                    Precision. <br />
                    Innovation. <br />
                    Excellence.
                  </h1>
                  <Link
                    href="projects"
                    className="mil-btn mil-btn-border mil-light"
                  >
                    View Our Work
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

      {/* overview */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                Overview
              </div>
              <h2 className="mil-mb-30 mil-up">
                Crafting Bahrain’s Finest Glass & Aluminium Solutions
              </h2>
              <p className="mil-mb-50 mil-up">
                With over 15 years of experience, Shafiq Glass & Aluminium has been a trusted
                name in delivering architectural, commercial, and decorative glass and aluminium
                solutions across Bahrain. From residential interiors to commercial facades, we
                blend precision, quality, and innovation in every project we undertake.
              </p>
              <div className="mil-up">
                <Link href="/about" className="mil-btn mil-btn-sm">
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
                      src="img/home/about-1.png"
                      alt="Shafiq Glass Project 1"
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
                      src="img/home/about-2.png"
                      alt="Shafiq Glass Project 2"
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
      {/* overview end */}


      {/* iconboxes */}
      <div className="mil-bg-dark mil-p-200-150">
        <div className="container">
          <div className="row mil-mb-50">
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/9.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">Mission</h5>
              <p className="mil-up">
                To embody excellence in every aspect of our operations, delivering superior quality products and services across local, regional, and international markets.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mil-mb-50">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/10.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">Vision</h5>
              <p className="mil-up">
                Harnessing 15 years of pioneering experience, our vision is to innovate the production of unique glass materials through the integration of new technologies and continuous learning.
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mil-icon mil-mb-30 mil-up">
                <img loading="lazy" src="img/icons/11.png" alt="icon" />
              </div>
              <h5 className="mil-mb-20 mil-light mil-up">Crafted Excellence</h5>
              <p className="mil-up">
                Every project reflects our passion for precision and craftsmanship — setting new benchmarks in architectural glass and aluminium solutions.
              </p>
            </div>
          </div>
          <div className="mil-up">
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

      {/* services */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100 d-flex flex-column justify-content-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                SERVICES
              </div>
              <h2 className="mil-mb-30 mil-up">
                Expert Glass & Aluminium Solutions for Every Space
              </h2>
              <p className="mil-up">
                At Shafiq Glass & Aluminium, we specialize in delivering high-quality, customized solutions for residential, commercial, and industrial projects. From sleek glass installations to durable aluminium structures, we turn ideas into reality with precision and excellence.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="mil-service-list">
                <li className="mil-mb-50 mil-up" data-count={1}>
                  <Link href="/services/glass-partitioning" className="mil-service-item d-block cursor-pointer h-100">
                    <div className="d-flex flex-column h-100">
                      <h4 className="mil-accent mil-mb-15">Glass Partitioning</h4>
                      <p>
                        Custom glass partitions for offices, retail spaces, and homes—combining openness with privacy and elegance.
                      </p>
                    </div>
                  </Link>
                </li>

                <li className="mil-mb-50 mil-up" data-count={2}>
                  <Link href="/services/aluminium-fabrication" className="mil-service-item d-block cursor-pointer h-100">
                    <div className="d-flex flex-column h-100">
                      <h4 className="mil-accent mil-mb-15">Aluminium Fabrication</h4>
                      <p>
                        High-strength aluminium doors, windows, curtain walls, and frames tailored to architectural and functional needs.
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      {/* services end */}

      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About Us
              </div>
              <h2 className="mil-mb-30 mil-up">
                A Legacy of Precision and Innovation
              </h2>
              <p className="mil-mb-50 mil-up">
                Since our inception, Shafiq Glass & Aluminium has been redefining the standards of architectural glazing and aluminium works across Bahrain. With a focus on quality craftsmanship, cutting-edge technology, and customer satisfaction, we’ve proudly completed a wide range of residential, commercial, and industrial projects for over 15 years.
              </p>
              <p className="mil-mb-50 mil-up">
                Our experienced team ensures each solution is tailored to meet the aesthetic and functional needs of every space—turning your vision into a reality with unmatched attention to detail.
              </p>
              <div className="mil-up">
                <Link href="/about" className="mil-btn mil-btn-sm">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-out-image mil-up">
                <img
                  loading="lazy"
                  src="img/home/about.png"
                  alt="Shafiq Glass About Image"
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
      <div className="mil-p-200-100 mil-bg-soft">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                VIDEO PRESENTATION
              </div>
              <h2 className="mil-mb-30 mil-up">Experience Craft in Motion</h2>
              <p className="mil-up">
                Step inside the world of Shafiq Glass & Aluminium. Discover how precision, design, and quality come together in our bespoke glass and aluminium projects.
              </p>
            </div>
            <div className="col-lg-8 mil-mb-100">
              <div className="mil-video-frame mil-video-2 mil-up">
                <img
                  loading="lazy"
                  src="img/home/video-cover.png"
                  alt="video cover"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
                <div className="mil-play">
                  <div>
                    <a
                      href="https://vimeo.com/25428289" // Replace with your actual video link
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

      {/* projects */}
      <div className="mil-bg-soft mil-p-200-200">
        <div className="container mil-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR MOST RECENT PROJECTS
              </div>
              <h2 className="mil-mb-30 mil-up">Glass & Aluminum Installations</h2>
              <p className="mil-mb-100 mil-up">
                From elegant glass facades to premium aluminum partitions, each project reflects our craftsmanship and attention to detail.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <Swiper {...sliderProps.milProjects1} className="swiper-container mil-projects-1">
                {/* Project 1 */}
                <SwiperSlide className="swiper-slide" data-swiper-parallax-scale="0.15">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/glass-façade.jpg"
                          alt="Glass Façade Project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-p-0" data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                      <h4 className="mil-mb-10">Commercial Glass Façade</h4>
                      <p className="mil-mb-20">Exterior Cladding System</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* Project 2 */}
                <SwiperSlide className="swiper-slide" data-swiper-parallax-scale="0.15">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/shopfront.jpg"
                          alt="Aluminum Shopfront"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-p-0" data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                      <h4 className="mil-mb-10">Retail Storefront System</h4>
                      <p className="mil-mb-20">Glass & Aluminum Framing</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* Project 3 */}
                <SwiperSlide className="swiper-slide" data-swiper-parallax-scale="0.15">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/partition.jpg"
                          alt="Office Partition"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-p-0" data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                      <h4 className="mil-mb-10">Office Glass Partitions</h4>
                      <p className="mil-mb-20">Interior Fit-Outs</p>
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

      {/* call to action */}
      <div
        className="mil-p-200-200 mil-bg-image"
        style={{ backgroundImage: "url(img/call-to-action/contact-background.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                CONTACT US TO START YOUR NEXT PROJECT
              </div>
              <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
                Let’s bring your vision to life
              </h2>
              <p className="mil-light mil-mb-40 mil-up">
                If you would like to discuss your design needs, collaborate on a
                project or simply find out more about our work, please don’t
                hesitate to get in touch.
              </p>
              <div className="mil-up">
                <Link href="/contact" className="mil-btn mil-btn-sm mil-btn-light">
                  Contact Us
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
