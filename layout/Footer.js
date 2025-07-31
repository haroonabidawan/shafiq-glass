const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-xl-3 mil-mb-100">
            <div className="mil-footer-logo mil-up">
              <img loading="lazy" src="img/logo.png" alt="Shafiq Glass" />
            </div>
          </div>

          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Main Office</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              Shafiq Glass & Aluminium Works<br />
              Building No. 1318, Road No. 4323,<br />
              Block No. 943, Riffa, Bahrain
            </p>
            <div className="mil-up">
              <a href="tel:+97317777777" className="mil-light">
                Phone: +973 17 777 777
              </a>
            </div>
          </div>

          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">General Inquiries</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              For quotes, questions,<br />
              or project discussions
            </p>
            <div className="mil-up">
              <a href="mailto:info@shafiqglass.com" className="mil-light">
                info@shafiqglass.com
              </a>
            </div>
          </div>

          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Stay Connected</h6>
            <ul className="mil-footer-list">
              <li className="mil-up">
                <a
                  target="_blank"
                  href="https://facebook.com/shafiqglass"
                  className="mil-light"
                >
                  Facebook
                </a>
              </li>
              <li className="mil-up">
                <a
                  target="_blank"
                  href="https://instagram.com/shafiqglass"
                  className="mil-light"
                >
                  Instagram
                </a>
              </li>
              <li className="mil-up">
                <a
                  target="_blank"
                  href="https://linkedin.com/company/shafiqglass"
                  className="mil-light"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="mil-footer-bottom">
          <p className="mil-text-14 mil-up">
            © {new Date().getFullYear()} Shafiq Glass & Aluminium Works. All rights reserved.
          </p>
          <p className="mil-text-14 mil-up">Developed By Haroon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
