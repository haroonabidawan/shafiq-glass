'use client';

import React from "react";
import Link from "next/link";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
    {
        title: "Commercial Glass Façade",
        subtitle: "Modern Cladding System",
        image: "/img/projects/glass-façade.jpg",
        link: "/projects/glass-facade",
        alt: "Modern commercial glass façade",
    },
    {
        title: "Retail Storefront System",
        subtitle: "Glass & Aluminium Framing",
        image: "/img/projects/shopfront.jpg",
        link: "/projects/shopfront-system",
        alt: "Aluminium shopfront installation",
    },
    {
        title: "Office Glass Partitions",
        subtitle: "Interior Fit-Outs",
        image: "/img/projects/partition.jpg",
        link: "/projects/office-partitions",
        alt: "Office interior glass partitioning",
    },
];

const FeatureProjects = () => {
    return (
        <div className="mil-bg-soft mil-p-200-200">
            <div className="container mil-relative">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                            OUR MOST RECENT PROJECTS
                        </div>
                        <h2 className="mil-mb-30 mil-up">
                            Signature Glass & Aluminium Installations
                        </h2>
                        <p className="mil-mb-100 mil-up">
                            Discover our commitment to excellence through our latest projects—crafted to meet the highest standards in aesthetics and performance.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                        <Swiper
                            {...sliderProps.milProjects1}
                            className="swiper-container mil-projects-1"
                        >
                            {projects.map((project, idx) => (
                                <SwiperSlide
                                    key={idx}
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
                                            <h4 className="mil-mb-10">{project.title}</h4>
                                            <p className="mil-mb-20">{project.subtitle}</p>
                                            {/* <span className="mil-btn mil-btn-sm">View Project</span> */}
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
