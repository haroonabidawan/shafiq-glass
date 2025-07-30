"use client";
import { moorkUtility } from "@/utility";
import { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    moorkUtility.backToTop();
  }, []);
  return (
    <a id="mil-btt" className="mil-back-to-top">
      <i className="fas fa-arrow-up" />
    </a>
  );
};
export default BackToTop;
