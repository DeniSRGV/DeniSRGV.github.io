const menu = ()=> {
  const menu = document.querySelector('.menu'),
    menuOverlay = document.querySelector('.menu__overlay'),
    menuItem = document.querySelectorAll('.menu__list-item'),
    menuBlock = document.querySelector('.menu__block-bottom'),
    hamburger = document.querySelectorAll('[data-trigger]'),
    itemBlock = document.querySelector('.header__wrapper');

    function closeMenu() {
      menu.classList.add('fade-out-left');
      setTimeout(function(){
        menuOverlay.classList.remove('menu_active');

      },1000);

      menu.classList.remove( 'fadein',);
      document.querySelector('.header__right-block').prepend(itemBlock);
      itemBlock.style.display = "";

    }
    function moovingBlock(){
      menuBlock.prepend(itemBlock);
      itemBlock.style.display = "flex";
    }

    if(document.documentElement.clientWidth >= 1366){

      hamburger.forEach(elem =>{
        elem.style.display = 'none';
      });
      moovingBlock();
      let elem = document.querySelector('[data-menu]');
      const contentMain = document.querySelector('[data-content]');

      contentMain.insertBefore(elem, contentMain.firstChild);



    }else {
      document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menuOverlay.classList.contains('menu_active')) {
            closeMenu();
        }
      });
      hamburger.forEach(item => {
        item.addEventListener('click', () => {
          if (menuOverlay.classList.contains('menu_active') ){

            closeMenu();

          }else{
            menu.classList.remove('fade-out-left');

            menuOverlay.classList.add('menu_active','fadein');
            moovingBlock();


          }

        });
      });

    }

    menuItem.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          if (document.documentElement.clientWidth <= 1366) {
            setTimeout(function(){
              menuOverlay.classList.remove('menu_active', 'fadein');
            },1000);
            menu.classList.toggle('menu__list-item_active"');
            menu.classList.add('fade-out-left');


          }


        });

      menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay && menuOverlay.classList.contains('menu_active')) {
            closeMenu();
        }
      });
    });



};
export default menu;

