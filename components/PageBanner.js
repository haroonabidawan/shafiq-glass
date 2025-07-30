import Link from "next/link";

const PageBanner = ({
  pageName = "About",
  pageUrl = "about",
  pageTitle = "About",
  bgImg = "img/about/1.png",
}) => {
  return (
    <div
      className="mil-banner-inner-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mil-overlay">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <ul className="mil-breadcrumbs mil-mb-30">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href={pageUrl}>{pageName}</Link>
                    </li>
                  </ul>
                  <h1 className="mil-light">{pageTitle}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;

export const PageBannerTransparent = ({
  pageName = "About",
  pageUrl = "about",
  pageTitle = "About",
}) => {
  return (
    <div className="mil-banner-inner-page">
      <div className="mil-overlay" style={{ backgroundColor: "transparent" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <ul className="mil-breadcrumbs mil-dark mil-mb-30">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href={pageUrl}>{pageName}</Link>
                    </li>
                  </ul>
                  <h1>{pageTitle}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
