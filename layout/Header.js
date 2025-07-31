"use client";
import { moorkUtility } from "@/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const HeaderMenu = () => {
  useEffect(() => {
    moorkUtility.stickMenu();
  }, []);

  const currentPath = usePathname();
  const isActive = (path) => currentPath.includes(path) ? "mil-current" : "";

  return (
    <Fragment>
      {/* <li className={currentPath === "/" ? "mil-current" : ""}>
        <Link href="/">Home</Link>
      </li> */}
      <li className={isActive("about")}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={isActive("services")}>
        <Link href="/services">Services</Link>
      </li>
      <li className={isActive("projects")}>
        <Link href="/projects">Projects</Link>
      </li>
      <li className={isActive("contact")}>
        <Link href="/contact">Contact</Link>
      </li>
    </Fragment>
  );
};


const Header = ({ header }) => {
  console.log("Header Value", header);
  switch (header) {
    case 5:
      return <Header5 />;
    default:
      return <DefaultHeader />;
  }
};

const Header5 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo.png" alt="Moork" />
            </Link>
          </div>
          <div className="mil-right">
            <nav>
              <ul
                className={`mil-navigation mil-white ${toggle ? "mil-active" : ""
                  }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame mil-light-panel">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo">
              <img loading="lazy" src="img/logo.png" alt="Moork" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white mil-center ${toggle ? "mil-active" : ""
                  }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
