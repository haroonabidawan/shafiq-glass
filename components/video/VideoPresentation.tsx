'use client';
import React from 'react';

const VideoPresentation = () => {
  return (
    <div className="mil-p-200-100 mil-bg-soft">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Text Section */}
          <div className="col-lg-4">
            <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
              BEHIND THE CRAFT
            </div>
            <h2 className="mil-mb-30 mil-up">
              Precision Engineering in Action
            </h2>
            <p className="mil-up">
              Witness how our team transforms raw materials into architectural
              excellence. Since 2006, we&apos;ve combined traditional
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
          <div className="col-lg-8">
            <div className="mil-up relative rounded overflow-hidden shadow-lg">
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/WsQqcg469V4?si=XqwM4WrIfiGqeBBt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;
