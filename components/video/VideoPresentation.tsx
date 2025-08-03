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
              BEHIND THE CRAFT
            </div>
            <h2 className="mil-mb-30 mil-up">
              Precision Engineering in Action
            </h2>
            <p className="mil-up">
              Witness how our team transforms raw materials into architectural
              excellence. Since 2005, we&apos;ve combined traditional
              craftsmanship with cutting-edge technology to deliver
              Bahrain&apos;s finest glass and aluminum solutions.
            </p>
            <div className="mil-up mil-mt-30 mt-3">
              <a href="/about" className="mil-btn mil-btn-sm mil-with-arrow">
                Our Manufacturing Process
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="col-lg-8 mil-mb-100">
            <div className="mil-video-frame mil-video-2 mil-up relative rounded overflow-hidden shadow-lg">
              <Image
                src="/img/home/video-cover.jpg"
                alt="Shafiq Glass & Aluminum manufacturing process"
                width={800}
                height={450}
                className="w-full h-auto object-cover z-0"
                priority
              />
              <div className="mil-play absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
                <div className="text-center">
                  <a
                    href="https://www.youtube.com/watch?v=shafiqglass-process-video"
                    className="mil-play-icon has-popup-video inline-flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Play manufacturing process video"
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
                  <p className="mil-text-14 mil-light mt-4 font-medium tracking-wider">
                    WATCH OUR PROCESS
                  </p>
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
