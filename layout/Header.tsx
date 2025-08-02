'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { moorkUtility } from '@/utility';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  const currentPath = usePathname();
  const isActive = (path: string) =>
    currentPath.includes(path) ? 'mil-current' : '';

  return (
    <Fragment>
      <li className={isActive('about')}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={isActive('services')}>
        <Link href="/services">Services</Link>
      </li>
      <li className={isActive('projects')}>
        <Link href="/projects">Projects</Link>
      </li>
      <li className={isActive('contact')}>
        <Link href="/contact">Contact</Link>
      </li>
    </Fragment>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    moorkUtility.stickMenu();
  }, []);

  const isHome = currentPath === '/';

  return (
    <div className={`mil-top-panel-frame ${!isHome ? 'mil-light-panel' : ''}`}>
      <div className="container">
        <div className="mil-top-panel">
          <div className="mil-left">
            <Link href="/" className="mil-logo mil-logo-sm">
              <img loading="lazy" src="/img/logo.png" alt="Shafiq Glass" />
            </Link>
          </div>

          <div className="mil-right">
            <nav>
              <ul
                className={`mil-navigation mil-white ${
                  toggle ? 'mil-active' : ''
                }`}
              >
                <HeaderMenu />
              </ul>
            </nav>

            <div
              className={`mil-menu-btn ${toggle ? 'mil-active' : ''}`}
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
