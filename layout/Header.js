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
  const activeMenuFuntion = (value) => {
    return value.some((el) => currentPath.includes(el)) ? "mil-current" : "";
  };

  return (
    <Fragment>
      <li
        className={`mil-has-children ${
          currentPath.includes("home") || currentPath == "/"
            ? "mil-current"
            : ""
        }`}
      >
        <a href="#" onClick={(e) => e.preventDefault()}>
          Home
        </a>
        <ul>
          <li>
            <Link href="/">Home 1</Link>
          </li>
          <li>
            <Link href="home-2">Home 2</Link>
          </li>
          <li>
            <Link href="home-3">Home 3</Link>
          </li>
          <li>
            <Link href="home-4">Home 4</Link>
          </li>
          <li>
            <Link href="home-5">Home 5</Link>
          </li>
          <li>
            <Link href="home-6">Home 6</Link>
          </li>
        </ul>
      </li>
      <li className={`${activeMenuFuntion(["about"])}`}>
        <Link href="about">About us</Link>
      </li>
      <li className={`${activeMenuFuntion(["services"])}`}>
        <Link href="services">Services</Link>
      </li>
      <li className={`mil-has-children ${activeMenuFuntion(["work"])}`}>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Works
        </a>
        <ul>
          <li>
            <Link href="works-1">List Home 1</Link>
          </li>
          <li>
            <Link href="works-2">List Home 2</Link>
          </li>
          <li>
            <Link href="works-3">List Home 3</Link>
          </li>
          <li>
            <Link href="work">Single work</Link>
          </li>
        </ul>
      </li>
      <li
        className={`mil-has-children ${activeMenuFuntion([
          "blog",
          "publication",
          "contact",
          "store",
          "cart",
        ])}`}
      >
        <a href="#.">Pages</a>
        <ul>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="publication">Publication</Link>
          </li>
          <li>
            <Link href="store">Store</Link>
          </li>
          <li>
            <Link href="store-item">Store item</Link>
          </li>
          <li>
            <Link href="cart">Cart</Link>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};
const HeaderLeng = () => {
  return (
    <ul>
      <li>
        <a href="#">En</a>
      </li>
      <li>
        <a href="#">Fr</a>
      </li>
    </ul>
  );
};

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;
    case 4:
      return <Header4 />;
    case 5:
      return <Header5 />;
    case 6:
      return <Header6 />;

    default:
      return <DefaultHeader />;
  }
};
const Header1 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-4.png" alt="Moork" />
            </Link>
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ul className="mil-navigation mil-leng mil-white">
              <li>
                <a href="#.">En / Fr</a>
                <HeaderLeng />
              </li>
            </ul>
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
const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-5.png" alt="Moork" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ul className="mil-navigation mil-leng mil-white">
              <li>
                <a href="#." style={{ color: "#898D96" }}>
                  En / Fr
                </a>
                <HeaderLeng />
              </li>
            </ul>
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
const Header3 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-4.png" alt="Moork" />
            </Link>
          </div>
          <div className="mil-right">
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
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
const Header4 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-4.png" alt="Moork" />
            </Link>
          </div>
          <div className="mil-right">
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
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
const Header5 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="img/logo-5.png" alt="Moork" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ul className="mil-navigation mil-leng mil-white">
              <li>
                <a href="#.">En / Fr</a>
                <HeaderLeng />
              </li>
            </ul>
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
const Header6 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel-frame mil-dark-panel">
      <div className="container">
        <div className="mil-top-panel">
          {/* mil-just-left mil-just-between */}
          <div className="mil-left">
            <Link href="/" className="mil-logo">
              <img loading="lazy" src="img/logo-2.png" alt="Moork" />
            </Link>
          </div>
          <div className="mil-right">
            <nav>
              <ul className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
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
              <img loading="lazy" src="img/logo-1.png" alt="Moork" />
            </Link>
            <nav>
              <ul
                className={`mil-navigation mil-white mil-center ${
                  toggle ? "mil-active" : ""
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>
          </div>
          <div className="mil-right">
            <ul className="mil-navigation mil-leng mil-white">
              <li>
                <a href="#.">En / Fr</a>
                <HeaderLeng />
              </li>
            </ul>
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
