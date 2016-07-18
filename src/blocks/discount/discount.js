$(document).ready(function(){

  // Находим в ДОМе элементы для карусели
  var carousel = $('#discount');


  // Инициируем карусели
  carousel.owlCarousel({ items: 1, dots: true});

  // Следим за кликом на первой ссылке-переключаетеле
  // $('#1').on('click', function(e){
  //   e.preventDefault();
  //   carousel.trigger('to.owl.carousel', 0);

  // });

  // // Следим за кликом на второй ссылке-переключаетеле
  // $('#2').on('click', function(e){
  //   e.preventDefault();
  //   carousel.trigger('to.owl.carousel', 1);

  // });

});
