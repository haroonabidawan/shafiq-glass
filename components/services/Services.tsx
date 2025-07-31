import React from "react";
import Link from "next/link";

const services = [
    {
        title: "Glass Installations",
        link: "/services/glass-partitioning",
        description:
            "Precision-crafted glass partitions, shower enclosures, balustrades, and facades—engineered for modern aesthetics and long-lasting clarity.",
    },
    {
        title: "Aluminium Fabrication",
        link: "/services/aluminium-fabrication",
        description:
            "Tailored aluminium solutions including doors, windows, curtain walls, and structural framing—built to meet architectural and performance demands.",
    },
];

const Services = () => {
    return (
        <div className="mil-p-200-150">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* Left Text Column */}
                    <div className="col-lg-5 mil-mb-100 d-flex flex-column justify-content-center">
                        <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                            SERVICES
                        </div>
                        <h2 className="mil-mb-30 mil-up">
                            Customized Glass & Aluminium Solutions for Every Environment
                        </h2>
                        <p className="mil-up">
                            At Shafiq Glass & Aluminium, we bring over 15 years of experience to every project—offering tailored solutions for homes, offices, showrooms, and industrial spaces. Whether you're upgrading interiors or building from the ground up, our team ensures seamless execution from design to installation.
                        </p>
                    </div>

                    {/* Right Services List */}
                    <div className="col-lg-6">
                        <ul className="mil-service-list">
                            {services.map((service, index) => (
                                <li
                                    key={index}
                                    className="mil-mb-50 mil-up"
                                    data-count={index + 1}
                                >
                                    <Link
                                        href={service.link}
                                        className="mil-service-item d-block cursor-pointer h-100"
                                    >
                                        <div className="d-flex flex-column h-100">
                                            <h4 className="mil-accent mil-mb-15">{service.title}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
