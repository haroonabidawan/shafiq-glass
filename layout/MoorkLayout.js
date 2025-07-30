"use client";
import EmbedPopup from "@/components/EmbedPopup";
import { moorkUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";
const MoorkLayout = ({ children, header }) => {
  useEffect(() => {
    moorkUtility.scrollAnimations();
    moorkUtility.counters();
  }, []);
  return (
    <Fragment>
      <EmbedPopup />
      <div id="smooth-wrapper" className="mil-wrapper">
        {/* back to top */}
        <BackToTop />
        {/* top panel */}
        <Header header={header} />
        {/* top panel end */}
        {/* content */}
        <div id="smooth-content" className="mil-content">
          {children}
          {/* footer */}
          <Footer />
          {/* footer end */}
        </div>
        {/* content end */}
      </div>
    </Fragment>
  );
};
export default MoorkLayout;
