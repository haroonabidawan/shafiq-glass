"use client";
import { useState } from "react";

const Faq = () => {
  const accordionData = [
    {
      id: 1,
      title: "How can I schedule a consultation for my project?",
      desc: "Møork undertakes a diverse range of projects, including high-rise buildings, urban planning, interior architecture, and sustainable developments. Explore our 'Our Projects' section for insights into our portfolio.",
    },
    {
      id: 2,
      title: "How can I join Møork's workshops?",
      desc: "Møork undertakes a diverse range of projects, including high-rise buildings, urban planning, interior architecture, and sustainable developments. Explore our 'Our Projects' section for insights into our portfolio.",
    },
    {
      id: 3,
      title: "Can I subscribe to receive updates from Møork?",
      desc: "Møork undertakes a diverse range of projects, including high-rise buildings, urban planning, interior architecture, and sustainable developments. Explore our 'Our Projects' section for insights into our portfolio.",
    },
    {
      id: 4,
      title: "Can I subscribe to receive updates from Møork?",
      desc: "Møork undertakes a diverse range of projects, including high-rise buildings, urban planning, interior architecture, and sustainable developments. Explore our 'Our Projects' section for insights into our portfolio.",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="mil-accordion">
      {accordionData.map((item) => (
        <div
          className={`mil-accordion-group mil-up ${
            active == item.id ? " mil-active" : ""
          }`}
          key={item.id}
        >
          <div
            className="mil-accordion-menu"
            onClick={() => setActive(active == item.id ? null : item.id)}
          >
            <h5 className="mil-light">{item.title}</h5>
            <div
              className={`mil-accordion-icon ${
                active == item.id ? "mil-active" : ""
              }`}
            >
              <i className="fas fa-arrow-up" />
            </div>
          </div>
          <div className="mil-accordion-content">
            <p
              className="mil-soft"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Faq;
