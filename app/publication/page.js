import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout>
      {/* banner */}
      <div className="mil-banner-space" />
      {/* banner end */}
      {/* publication  */}
      <div className="mil-p-200-0">
        <div className="container">
          <ul className="mil-breadcrumbs mil-dark mil-mb-30 mil-up">
            <li>
              <Link href="home-5">Home</Link>
            </li>
            <li>
              <Link href="blog">Insights</Link>
            </li>
            <li>
              <Link href="publication">Publication</Link>
            </li>
          </ul>
          <h1 className="mil-mb-100 mil-up">
            Interview with Julia Quadrifilios: Leading Innovation in Design
          </h1>
          <div className="mil-image-simple mil-land-short mil-up mil-mb-30">
            <img
              loading="lazy"
              src="img/blog/9.png"
              alt="img"
              data-value-1={1}
              data-value-2="1.1"
              className="mil-scale-img"
            />
          </div>
          <div className="mil-post-info mil-mb-100 mil-up">
            <p>By: Allegra Boonbost</p>
            <p>Nov 21,</p>
            <p>Comments: 06</p>
          </div>
          <h3 className="mil-mb-50 mil-up">Residential Design Reimagined</h3>
          <p className="mil-mb-30 mil-up">
            In the fascinating world of residential design, Møork emerges as a
            master at creating spaces that go beyond conventional boundaries. In
            our latest article, "The Art of Merging Styles: Residential Design
            Reimagined," we invite you to immerse yourself in the magic behind
            creating homes that are authentic testimonies of elegance and
            originality.
          </p>
          <p className="mil-mb-30 mil-up">
            At the heart of our philosophy is stylistic evolution, where we
            explore the fusion of architectural styles to achieve a unique and
            personalized synthesis. From classic elegance to modern avant-garde,
            each project is an expression of unrestricted creativity. Through
            this article, we unravel the decisions behind each stylistic choice
            and how they contribute to the creation of environments that are not
            only visually striking, but also functionally exceptional.
          </p>
          <p className="mil-mb-30 mil-up">
            Discover behind-the-scenes stories as we share the inspirations and
            challenges that arose during the creative process. From the
            selection of innovative materials to the optimization of functional
            spaces, every detail is meticulously considered to offer a living
            experience that goes beyond the ordinary. Join us on this journey of
            reinventing residential design, where each home tells its own unique
            and memorable story.
          </p>
          <blockquote className="mil-text-30 mil-mb-15 mil-up">
            Discover behind-the-scenes stories as we share the inspirations and
            challenges that arose during the creative process.
          </blockquote>
          <p className="mil-dark mil-mb-30 mil-up">- Jane Doe</p>
          <p className="mil-mb-30 mil-up">
            The history of Lorem Ipsum is widely believed to originate with
            Cicero in the 1st century BC and his text De Finibus bonorum et
            malorum. This philosophical work, also known as At the Extremes of
            Good and Evil, was divided into five books. The Lorem Ipsum we know
            today was derived from parts of the first book Liber Primus and its
            discussion of hedonism, the words of which had been altered, added
            and removed to render them meaningless and improper Latin.
          </p>
          <p className="mil-mb-100 mil-up">
            It is not known exactly when the text received its current
            traditional form. However, references to the phrase "Lorem Ipsum"
            can be found in the 1914 Loeb Classical Library Edition of the De
            Finibus in sections 32 and 33. It was in this edition of the De
            Finibus that H. Rackman translated the text. The following fragment
            is selected from section 32:
          </p>
          <div className="mil-post-info mil-mb-100 mil-up">
            <h6>Share:</h6>
            <a href="#." className="mil-text-link">
              Facebook
            </a>
            <a href="#." className="mil-text-link">
              X.com
            </a>
            <a href="#." className="mil-text-link">
              Pinterest
            </a>
            <a href="#." className="mil-text-link">
              Linkedin
            </a>
            <a href="#." className="mil-text-link">
              Tiktok
            </a>
          </div>
          <ul className="mil-comments mil-no-deco mil-mb-100 mil-up">
            <li>
              <div className="mil-comment mil-up">
                <div className="mil-avatar">
                  <img loading="lazy" src="img/users/1.png" alt="user" />
                </div>
                <div className="mil-comment-text">
                  <h6 className="mil-mb-10">Allegra Boonbost</h6>
                  <p className="mil-soft mil-mb-10">
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but occasionally
                    circumstances occur in which toil and pain can procure him
                    some.
                  </p>
                  <p className="mil-soft">
                    Ig:{" "}
                    <a href="#." className="mil-text-link">
                      @Alleg.B
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* publication end */}
      {/* post navigation */}
      <div className="mil-mb-100">
        <div className="container">
          <div className="mil-nav-frame mil-up">
            <div className="row">
              <div className="col-xl-6">
                <Link href="publication" className="mil-post-nav">
                  <div className="mil-cover">
                    <img loading="lazy" src="img/blog/1.png" alt="cover" />
                  </div>
                  <div className="mil-descr">
                    <p className="mil-text-14 mil-mb-10">Prev Post</p>
                    <h6 className="mil-mb-10">
                      The Power of Materials: <br />
                      Innovation in Every Detail
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-xl-6">
                <Link href="publication" className="mil-post-nav mil-next">
                  <div className="mil-cover">
                    <img loading="lazy" src="img/blog/2.png" alt="cover" />
                  </div>
                  <div className="mil-descr">
                    <p className="mil-text-14 mil-mb-10">Next Post</p>
                    <h6 className="mil-mb-10">
                      Sustainable Design: <br />
                      Beyond Aesthetics
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* post navigation end */}
      {/* comments */}
      <div className="mil-p-0-200">
        <div className="container">
          <h2 className="mil-mb-100 mil-up">
            (<span>6</span>) Comments
          </h2>
          <ul className="mil-comments mil-no-deco mil-mb-100">
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
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
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
            <li>
              <div className="mil-comment mil-up">
                <div className="mil-avatar">
                  <img loading="lazy" src="img/users/5.png" alt="user" />
                </div>
                <div className="mil-comment-text">
                  <h6 className="mil-mb-10">Thomas Gallo</h6>
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
                      <img loading="lazy" src="img/users/6.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Gemma Wood</h6>
                      <p className="mil-text-14 mil-soft mil-mb-10">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
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
                      <img loading="lazy" src="img/users/7.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Samir Holm</h6>
                      <p className="mil-text-14 mil-soft mil-mb-10">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
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
                      <img loading="lazy" src="img/users/8.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Gemma Wood</h6>
                      <p className="mil-text-14 mil-soft mil-mb-10">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
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
          </ul>
          <h2 className="mil-mb-100 mil-up">Leave a comment</h2>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="mil-input mil-mb-30 mil-up"
                  placeholder="Your name"
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="email"
                  className="mil-input mil-mb-30 mil-up"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                className="mil-input mil-mb-30 mil-up"
                placeholder="Your website"
              />
              <textarea
                name="Message"
                placeholder="Write your comment here"
                className="mil-mb-30 mil-up"
                defaultValue={""}
              />
              <div className="mil-checkbox-frame mil-mb-30 mil-up">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-14 mil-soft">
                  By clicking “Submit” you Accept the{" "}
                  <a href="#." className="mil-text-link">
                    processing of personal data
                  </a>
                </p>
              </div>
              <div className="mil-up">
                <button type="submit" className="mil-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* comments end */}
    </MoorkLayout>
  );
};
export default page;
