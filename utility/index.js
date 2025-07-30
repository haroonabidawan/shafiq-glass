import { ScrollSmoother, ScrollTrigger } from "@/lib/plugins";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export const moorkUtility = {
  scrollAnimations() {
    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
          ease: "sine",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const scaleImage = document.querySelectorAll(".mil-scale-img");
    scaleImage.forEach((section) => {
      // Use getAttribute to retrieve data attributes
      var value1 = section.getAttribute("data-value-1");
      var value2 = section.getAttribute("data-value-2");

      // Use the values as before in GSAP's fromTo method
      gsap.fromTo(
        section,
        {
          ease: "sine",
          scale: value1,
        },
        {
          scale: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  },
  counters() {
    const numbers = document.querySelectorAll(".mil-counter");

    numbers.forEach((element) => {
      const count = element;
      const zero = { val: 0 };
      const num = parseFloat(element.dataset.number);
      const split = (num + "").split("."); // to handle decimal numbers
      const decimals = split.length > 1 ? split[1].length : 0;

      gsap.to(zero, {
        val: num,
        duration: 1.8,
        scrollTrigger: {
          trigger: element,
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          count.textContent = zero.val.toFixed(decimals);
        },
      });
    });
  },
  stickMenu() {
    ScrollTrigger.create({
      start: "top -30",
      end: 99999,
      toggleClass: {
        className: "mil-scroll",
        targets: ".mil-top-panel-frame , .mil-navigation",
      },
    });
  },
  backToTop() {
    var btn = document.querySelector("#mil-btt");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        btn.classList.add("mil-show");
      } else {
        btn.classList.remove("mil-show");
      }
    });

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};
