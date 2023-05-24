import Swiper, { Autoplay } from 'swiper';
const slider = () => {
    const quotesSlider = new Swiper('.headerTop-quotes_swiper', {
        modules: [Autoplay],
        direction: 'horizontal',
        slidesPerView : 1,
        loop: true,
        spaceBetween: 32,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
      });
}
export default slider