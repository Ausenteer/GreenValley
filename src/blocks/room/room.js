$(document).ready(function(){

  // Находим в ДОМе элементы для карусели
  var carousel_1 = $('#slider-room');

  // Инициируем карусели
  carousel_1.owlCarousel({
    items: 1,
    loop:true,
  });

  $('.fancybox').fancybox({
    closeBtn: true,
  });

});

