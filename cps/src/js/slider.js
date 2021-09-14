const slider = ()=> {
  const widthClient = document.documentElement.clientWidth;
  const slideItem = document.querySelectorAll('.slider__item');
  const wrapperSlider = document.querySelector('.slider__wrapper');
  let swiperRepair;

  function changeActiveClass() {

      slideItem.forEach(function(item) {

      item.addEventListener('click', (e)=> {
        let target = e.currentTarget;
        for(let i = 0;i<wrapperSlider.children.length;i++){
                wrapperSlider.children[i].classList.remove("slider__item_active");
        }
        target.classList.add('slider__item_active');

      });
      });
  }

    if (widthClient >= 320 && widthClient <= 767 ) {
         swiperRepair = new Swiper('.swiper', {
        // Optional parameters
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
            el: '.swiper-pagination',

            }
    });
    }

changeActiveClass();

};

export default slider;
