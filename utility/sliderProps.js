import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

export const sliderProps = {
  milProjects1: {
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-prev-1",
      nextEl: ".mil-next-1",
    },
  },
  milProjects2: {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    initialSlide: 1,
  },
  milProjects3: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
  },
  milProjects4: {
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".mil-slider-nav .mil-prev",
      nextEl: ".mil-slider-nav .mil-next",
    },
  },
  milIconbox: {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  },
};
