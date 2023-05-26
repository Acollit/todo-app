import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".todo__swiper", {
  slidesPerView: 6,
  direction: "vertical",
});

