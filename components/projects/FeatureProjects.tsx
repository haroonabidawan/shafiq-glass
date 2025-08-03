'use client';

import React from 'react';
import { sliderProps } from '@/utility/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getFeaturedProjects } from '@/data/projects';

const FeatureProjects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mil-bg-soft mil-p-200-200">
      <div className="container mil-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              FEATURED PROJECTS
            </div>
            <h2 className="mil-mb-30 mil-up">
              Signature Glass & Aluminum Installations
            </h2>
            <p className="mil-mb-100 mil-up">
              Explore our commitment to excellence through our most prestigious
              projects—crafted to meet the highest standards in aesthetics and
              performance across Bahrain.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <Swiper
              {...sliderProps.milProjects1}
              className="swiper-container mil-projects-1"
            >
              {featuredProjects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <div className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src={project.image}
                          alt={project.alt}
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
                      <div className="mil-project-label mil-mb-10">
                        <span className="mil-accent">{project.category}</span>
                      </div>
                      <h4 className="mil-mb-10">{project.title}</h4>
                      <p className="mil-text-sm mil-mb-20">
                        {project.subtitle}
                      </p>
                      <p className="mil-text-sm mil-light-soft">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Slider Navigation Arrows */}
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
  );
};

export default FeatureProjects;
