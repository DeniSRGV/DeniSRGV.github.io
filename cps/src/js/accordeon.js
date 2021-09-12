const accordeon = ()=> {
    const triggerBtn = document.querySelectorAll('.services__descr-further'),
          swiperSubtitle = document.querySelectorAll('.repair__swiper-item__subtitle');
      if (document.documentElement.clientWidth >= 768) {

        swiperSubtitle.forEach(elem => {
          elem.remove();
        });
      }
      triggerBtn.forEach(function(btn)  {
        let span = document.createElement('span');

        function closeContent(text) {

          setTimeout(function(){
            btn.innerText = text;
            btn.append(span);
            span.style.transform = "";
          },1000);
          btn.classList.remove('open-btn');

          }

        btn.addEventListener('click', function(){

          if (btn.classList.contains('open-btn')) {
            if(this.previousElementSibling.classList.contains('services__descr-text')){
              this.previousElementSibling.style.maxHeight = '';
              closeContent('Читать далее');
            }
            else {
              this.previousElementSibling.style.maxHeight = '';
              closeContent('Показать всё');


            }
          }else {
            this.previousElementSibling.style.maxHeight = '1000px';
            btn.innerText = 'Скрыть';


            span.style.transform = "translateY(-50%) rotate(180deg)";
            btn.append(span);
            btn.classList.add('open-btn');

          }

        });


      });

        };
export default accordeon;
