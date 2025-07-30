import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout>
      {/* banner end */}
      {/* store item  */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-image-simple mil-square mil-up">
                <img
                  loading="lazy"
                  src="img/store/items/1.png"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
            </div>
            <div className="col-lg-5 mil-mb-100">
              <ul className="mil-breadcrumbs mil-dark mil-mb-30 mil-up">
                <li>
                  <Link href="home-5">Home</Link>
                </li>
                <li>
                  <Link href="store">Store</Link>
                </li>
              </ul>
              <h1 className="mil-mb-30 mil-up">Minimalist Elegance Chair</h1>
              <p className="mil-mb-30 mil-up">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot.
              </p>
              <p className="mil-text-30 mil-dark mil-mb-30  mil-up">$256.96</p>
              <div className="mil-mb-30 mil-up">
                <a href="#." className="mil-btn mil-btn-sm">
                  Add to cart
                </a>
              </div>
              <ul className="mil-list-1">
                <li className="mil-up">
                  <span className="mil-dark">SKU:</span>&nbsp;{" "}
                  <span>MNML-BRO-CHR-001</span>
                </li>
                <li className="mil-up">
                  <span className="mil-dark">Category:</span>&nbsp;{" "}
                  <span>Chairs</span>
                </li>
                <li className="mil-up">
                  <span className="mil-dark">Tags:</span>&nbsp;{" "}
                  <span>Minimalist, Elegant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* store item end */}
      {/* info */}
      <div>
        <div className="container">
          <div className="mil-tab-container">
            <h4 className="mil-tab" onclick="openTab('tab1')">
              Description
            </h4>
            <h4 className="mil-tab mil-active-tab" onclick="openTab('tab2')">
              Additional information
            </h4>
            <h4 className="mil-tab" onclick="openTab('tab3')">
              Reviews
            </h4>
          </div>
          <div id="tab1" className="mil-tab-content">
            <p className="mil-mb-30 mil-up">
              A wooden chair with a soft leather-upholstered seat combines the
              elegance of natural material with comfort. The frame is crafted
              from high-quality wood, providing the chair with durability and
              stability. Its clean lines and natural textures create a sense of
              warmth and coziness in any space.
            </p>
            <p className="mil-up mil-mb-60">
              The soft seat offers refined comfort and support for your body.
              The leather upholstery gives the chair a luxurious look and feel,
              adding elegance and style. This design is perfect for both a home
              office and a living room, creating an atmosphere of luxury and
              relaxation. A wooden-framed chair with a leather seat is a blend
              of classic style with modern comfort.
            </p>
          </div>
          <div id="tab2" className="mil-tab-content mil-active-content">
            <ul className="mil-list-2 mil-up mil-mb-60">
              <li>
                <span className="mil-dark">Material:</span>
                <span>Steel and Synthetic Leather</span>
              </li>
              <li>
                <span className="mil-dark">Dimensions:</span>
                <span>Height: 85 cm | Width: 50cm | Depth: 55cm</span>
              </li>
              <li>
                <span className="mil-dark">Weight:</span>
                <span>7kg</span>
              </li>
              <li>
                <span className="mil-dark">Style:</span>
                <span>Minimalist Elegant</span>
              </li>
              <li>
                <span className="mil-dark">Design:</span>
                <span>
                  Ergonomic contour with clean lines and slim steel legs
                </span>
              </li>
              <li>
                <span className="mil-dark">Recommended Use:</span>
                <span>Indoor</span>
              </li>
            </ul>
            <p className="mil-up mil-mb-60">
              Note: I throw myself down among the tall grass by the trickling
              stream; and, as I lie close to the earth, a thousand unknown
              plants are noticed by me: when I hear the buzz of the little world
              among the stalks, and grow familiar with the countless
              indescribable forms of the insects and flies, then I feel the
              presence of the Almighty, who formed us in his own image, and the
              breath
            </p>
          </div>
          <div id="tab3" className="mil-tab-content">
            <ul className="mil-comments">
              <li>
                <div className="mil-comment mil-up">
                  <div className="mil-avatar">
                    <img loading="lazy" src="img/users/1.png" alt="user" />
                  </div>
                  <div className="mil-comment-text">
                    <h6 className="mil-mb-10">Joshua Conti</h6>
                    <p className="mil-text-14 mil-soft mil-mb-10">
                      December 10, 2023 at 10:13
                    </p>
                    <p className="mil-soft">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth
                    </p>
                    <a href="#." className="mil-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="mil-comment mil-up">
                  <div className="mil-avatar">
                    <img loading="lazy" src="img/users/2.png" alt="user" />
                  </div>
                  <div className="mil-comment-text">
                    <h6 className="mil-mb-10">Bernarda Mitchell</h6>
                    <p className="mil-text-14 mil-soft mil-mb-10">
                      December 10, 2023 at 10:13
                    </p>
                    <p className="mil-soft">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth
                    </p>
                    <a href="#." className="mil-reply">
                      Reply
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="mil-comment mil-up">
                      <div className="mil-avatar">
                        <img loading="lazy" src="img/users/3.png" alt="user" />
                      </div>
                      <div className="mil-comment-text">
                        <h6 className="mil-mb-10">Noah Frigerio</h6>
                        <p className="mil-text-14 mil-soft mil-mb-10">
                          December 10, 2023 at 10:13
                        </p>
                        <p className="mil-soft">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth
                        </p>
                        <a href="#." className="mil-reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="mil-comment mil-up">
                  <div className="mil-avatar">
                    <img loading="lazy" src="img/users/4.png" alt="user" />
                  </div>
                  <div className="mil-comment-text">
                    <h6 className="mil-mb-10">Geraldine Moore</h6>
                    <p className="mil-text-14 mil-soft mil-mb-10">
                      December 10, 2023 at 10:13
                    </p>
                    <p className="mil-soft">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth
                    </p>
                    <a href="#." className="mil-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* info end */}
      {/* additional items */}
      <div className="mil-p-200-100">
        <div className="container">
          <h2 className="mil-mb-100 mil-up">You may also like</h2>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 mil-mb-100">
              <Link href="store-item" className="mil-store-card mil-up">
                <div className="mil-cover">
                  <img loading="lazy" src="img/store/items/9.png" alt="cover" />
                </div>
                <div className="mil-descr">
                  <h6 className="mil-mb-10">Minimalist Elegance Chair</h6>
                  <p className="mil-text-22 mil-dark">$256.96</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 mil-mb-100">
              <Link href="store-item" className="mil-store-card mil-up">
                <div className="mil-cover">
                  <img
                    loading="lazy"
                    src="img/store/items/10.png"
                    alt="cover"
                  />
                </div>
                <div className="mil-descr">
                  <h6 className="mil-mb-10">Minimalist Elegance Chair</h6>
                  <p className="mil-text-22 mil-dark">$256.96</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 mil-mb-100">
              <Link href="store-item" className="mil-store-card mil-up">
                <div className="mil-cover">
                  <img
                    loading="lazy"
                    src="img/store/items/11.png"
                    alt="cover"
                  />
                </div>
                <div className="mil-descr">
                  <h6 className="mil-mb-10">Minimalist Elegance Chair</h6>
                  <p className="mil-text-22 mil-dark">$256.96</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 mil-mb-100">
              <Link href="store-item" className="mil-store-card mil-up">
                <div className="mil-cover">
                  <img
                    loading="lazy"
                    src="img/store/items/12.png"
                    alt="cover"
                  />
                </div>
                <div className="mil-descr">
                  <h6 className="mil-mb-10">Minimalist Elegance Chair</h6>
                  <p className="mil-text-22 mil-dark">$256.96</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* additional items end */}
    </MoorkLayout>
  );
};
export default page;
