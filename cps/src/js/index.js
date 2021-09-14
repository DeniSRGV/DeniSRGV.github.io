import '../sass/style.sass';
import slider from './slider';
import menu from './menu';
import smooth from './smooth';
import accordeon from './accordeon';
import modals from './modals';




window.addEventListener('DOMContentLoaded', function() {
  smooth();
  menu();
  accordeon();
  modals();
  slider();




    window.addEventListener('resize', ()=> {
      // menu();
      slider();
    });
    console.log("it works");
});
