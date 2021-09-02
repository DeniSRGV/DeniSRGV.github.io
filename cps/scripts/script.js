window.addEventListener('DOMContentLoaded', function() {
    const btnShow = document.querySelectorAll('.repair__text'),
          contentBlock = document.querySelector('.repair__swiper-wrapper');

    if (document.documentElement.clientWidth <= 320) {
        const swiperRepair = new Swiper('.swiper', {
            // Optional parameters
                loop: true,
                spaceBetween: 16,
                slidesPerView: 'auto',
                pagination: {
                el: '.swiper-pagination',
                }
        });
    } 
    if (document.documentElement.clientWidth >= 768){
        btnShow.forEach(btn => {
            btn.addEventListener('click', function() {
                if(contentBlock.classList.contains("show-content")){
                    contentBlock.classList.remove("show-content");
                    btn.innerHTML = "Показать всё<span></span>";
                    btn.style.transform = "";
                    
                }else{
                    contentBlock.classList.add("show-content");
                    btn.innerHTML = "Скрыть<span></span>";
                    btn.children[0].style.cssText = `
                    transform: translateY(-50%) rotate(
                        180deg
                        );
                    `;
                    btn.style.transform = "translateY(88px)";
                }
                
            });
        });
    
    }
    
});
