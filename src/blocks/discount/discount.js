$(document).ready(function(){

var offersCarousel = $('#discount');
// reviewInitTimeCounter;

offersCarousel.owlCarousel({ items: 1, dots: true });

// $(window).on('resize', function(){
// clearTimeout(reviewInitTimeCounter);
// reviewInitTimeCounter = setTimeout(reviewCarouselTrigger, 100);
// });

// reviewCarouselTrigger();

// function reviewCarouselTrigger() {
// if ($('body').outerWidth() >= 1200) {
// offersCarousel.owlCarousel({ items: 1 });
// }
// else {
// offersCarousel
// .trigger('destroy.owl.carousel')
// .removeClass('owl-carousel owl-loaded')
// .find('.owl-stage-outer')
// .children()
// .unwrap();
// }
// }

});