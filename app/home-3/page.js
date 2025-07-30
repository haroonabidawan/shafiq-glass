"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <MoorkLayout header={3}>
      {/* banner */}
      <div className="mil-banner mil-banner-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-bg-pad mil-bg-soft" />
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-mb-30">ARCHITECTURE</div>
                  <h1 className="mil-display-1 mil-mb-60">
                    Chic complex design
                  </h1>
                  <Link href="works-1" className="mil-btn">
                    Explore projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame">
                <img loading="lazy" src="img/home-3/1.png" alt="image" />
                <div className="mil-bannet-content-items">
                  <div className="mil-counter-item mil-mb-60">
                    <h5 className="mil-light mil-mb-20">
                      +
                      <span className="mil-counter" data-number={560}>
                        560
                      </span>{" "}
                      Projects:
                    </h5>
                    <p className="mil-light">
                      Since our founding in 2010, we have successfully completed
                    </p>
                  </div>
                  <div className="mil-counter-item">
                    <h5 className="mil-light mil-mb-20">
                      <span className="mil-counter" data-number={30}>
                        30
                      </span>
                      + house .NET Partners:
                    </h5>
                    <p className="mil-light">
                      We have more than 30 partners since the creation of DOOR
                      house .NET
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">
                Explore Our History: Beyond Architecture
              </h2>
              <p className="mil-mb-50 mil-up">
                Our experience ranges from interior design to projects in the
                cultural industry, all fused with a unique perspective. Learn
                about the essence of Møork and how we take creativity beyond
                conventional boundaries.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-illustration-4">
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-3/2.png"
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
                      src="img/home-3/3.png"
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
      {/* about */}
      <div className="mil-p-0-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-end">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                EXPLORE OUR CREATIVE FOOTPRINT
              </div>
              <h2 className="mil-mb-30 mil-up">
                Our Legacy in Finished Projects
              </h2>
              <p className="mil-mb-50 mil-up">
                Explore the diversity of spaces we have transformed, from
                intimate shops to expansive buildings. Each project is a unique
                masterpiece, created with attention to detail and an unwavering
                commitment to excellence.
              </p>
              <div className="mil-up">
                <Link
                  href="works-1"
                  className="mil-btn mil-btn-sm mil-btn-border"
                >
                  Into our portfolio
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-counter-box">
                <div className="mil-counter-text">
                  <div className="mil-number mil-accent mil-mb-50 mil-up">
                    <span className="mil-counter" data-number={44}>
                      44
                    </span>
                    +
                  </div>
                  <h4 className="mil-accent mil-up">Projects Completed</h4>
                </div>
                <img
                  loading="lazy"
                  src="img/home-3/4.png"
                  alt="background"
                  className="mil-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* projects */}
      <div className="mil-p-0-200">
        <div className="container">
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
                {...sliderProps.milProjects3}
                className="swiper-container mil-projects-3 mil-mb-100"
              >
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-3/5.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner">
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
                          src="img/home-3/6.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner">
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
                          src="img/home-3/7.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner">
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p>Iconic skyscrapers</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
            <p className="mil-up">
              <span className="mil-badge">Get Inspired:</span>Immerse yourself
              in Our Philosophy and Projects{" "}
              <a href="#" className="mil-dark">
                Download the Complete Møork Guide
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* services */}
      <div className="mil-bg-dark mil-p-200-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-soft mil-mb-30 mil-up">
                SERVICES
              </div>
              <h2 className="mil-mb-30 mil-light mil-up">
                Exceptional Design, Infinite Solutions
              </h2>
              <p className="mil-up">
                At Møork, we don't just offer services; we provide design
                experiences that transform spaces and exceed expectations.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="mil-service-list">
                <li className="mil-mb-50 mil-up" data-count={1}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Interior Design</h4>
                    <p>
                      Creation of captivating and functional environments for
                      diverse spaces.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={2}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Urban Planning</h4>
                    <p>
                      We approach projects of any scale with a comprehensive
                      approach.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={3}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Small Group Work</h4>
                    <p>
                      Unique composition that leaves its mark on each project,
                      encouraging open dialogue and creativity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* services end */}
      {/* brands */}
      <div className="mil-p-200-170">
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
      <div className="mil-p-0-170">
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
      {/* blog */}
      <div className="mil-bg-soft mil-p-200-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                IMMERSE YOURSELF IN STORIES
              </div>
              <h2 className="mil-mb-30 mil-up">Discover the Latest</h2>
              <p className="mil-mb-100 mil-up">
                Explore design trends, inspiration behind projects and
                fascinating details of our creative process.
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
                      src="img/blog/1.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h4 className="mil-mb-10">
                    Sustainable Design: Beyond the Aesthetic
                  </h4>
                  <p>5 minutes read</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mil-mb-50">
              <Link href="publication" className="mil-blog-card">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/blog/2.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h4 className="mil-mb-10">
                    Minimalist Trend in Interior Design
                  </h4>
                  <p>7 minutes read</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* blog end */}
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
