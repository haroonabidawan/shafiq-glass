'use client';
import React from 'react';
import Image from 'next/image';

const VideoPresentation = () => {
  return (
    <div className="mil-p-200-100 mil-bg-soft">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-4 mil-mb-100">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              VIDEO PRESENTATION
            </div>
            <h2 className="mil-mb-30 mil-up">Experience Craft in Motion</h2>
            <p className="mil-up">
              Explore our world of precision and artistry. Watch how we
              transform raw materials into sleek, functional, and elegant glass
              and aluminium structures tailored to our clients’ visions.
            </p>
          </div>

          {/* Video Section */}
          <div className="col-lg-8 mil-mb-100">
            <div className="mil-video-frame mil-video-2 mil-up relative">
              <Image
                src="/img/home/video-cover.png"
                alt="Shafiq Glass & Aluminium video preview"
                width={800}
                height={450}
                className="w-full h-auto object-cover z-0"
                priority
              />
              <div className="mil-play absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <a
                    href="https://vimeo.com/25428289"
                    className="mil-play-icon has-popup-video"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Play video"
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
                  <p className="mil-text-14 mil-light mt-2">PLAY VIDEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;
